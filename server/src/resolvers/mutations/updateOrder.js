const { ApolloError } = require("apollo-server");

module.exports = async (_, { id, input }, { currentUser, models }) => {
  try {
    const orderToUpdate = await models.Order.findOne({ _id: id });

    if (!orderToUpdate)
      throw new ApolloError(`Could not find order with id: '${id}'.`, 400);

    //ONLY THE ADMIN USER CAN UPDATE AN ORDER STATUS
    if (currentUser.isAdmin) {
      Object.keys(input).forEach((value) => {
        productToUpdate[value] = input[value];
      });
    }
    // NORMAL USER SHOULD ONLY BE ABLE TO UPDATE "NOTES" OF ORDER ONCE ITS CREATED
    if (currentUser._id === orderToUpdate.hasUser) {
      orderToUpdate["notes"] = input["notes"];
    }

    const updatedProduct = await orderToUpdate.save();

    return updatedProduct;
  } catch (e) {
    throw new ApolloError(e);
  }
};
