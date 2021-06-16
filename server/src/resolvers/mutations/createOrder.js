const { ApolloError, AuthenticationError } = require("apollo-server");

module.exports = async (_, args, { currentUser, models, pubsub }) => {
  if (!currentUser) {
    throw new AuthenticationError("not authenticated");
  }

  let { notes, items } = args.input;

  //ITEMS SHOULD COME IN THE FORM OF [{id: ID!, quantity: Int}] from the frontend
  const cartItems = await Promise.all(
    items.map(async (item) => {
      const product = await models.Product.findById(item.id).exec();

      return {
        id: product._id,
        name: product.name,
        price: product.price,
        skuCode: product.skuCode,
        quantity: item.quantity,
      };
    })
  );

  const deliveryInfo = args.input.deliveryInfo
    ? args.input.deliveryInfo
    : currentUser.info;

  try {
    const order = new models.Order({
      hasUser: currentUser._id,
      items: cartItems,
      deliveryInfo,
      notes,
    });

    await order.save();

    currentUser.orders = currentUser.orders.concat(order);

    await currentUser.save();

    const savedOrder = order.populate("hasUser").execPopulate();

    pubsub.publish("ORDER_ADDED", { orderAdded: savedOrder });

    return savedOrder;
  } catch (e) {
    throw new ApolloError(e);
  }
};
