const { ApolloError, AuthenticationError } = require("apollo-server");

module.exports = async (_, args, { currentUser, models }) => {
  if (!currentUser) {
    throw new AuthenticationError("not authenticated");
  }

  let { notes, items } = args.input;
  //items should come in the form of [{id: ID!, quantity: Int}] from the frontend
  const productsArr = await models.Product.find();
  let populatedItems = items.map((i) => {
    return {
      quantity: i.quantity,
      product: productsArr.find((p) => p.id === i.id),
    };
  });

  const deliveryInfo = args.input.deliveryInfo
    ? args.input.deliveryInfo
    : currentUser.info;

  try {
    const order = new models.Order({
      hasUser: currentUser._id,
      items: populatedItems,
      deliveryInfo,
      notes,
    });
    await order.save();
    console.log(order);
    return order.populate("hasUser").execPopulate();
  } catch (e) {
    throw new ApolloError(e);
  }
};
