const { ApolloError } = require("apollo-server");

module.exports = async (_, { id, status, notes }, { currentUser, models }) => {
  try {
    const orderToUpdate = await models.Order.findOne({ _id: id });
    console.log(id, status, notes);

    if (!orderToUpdate)
      throw new ApolloError(`Could not find order with id: '${id}'.`, 400);

    //ONLY THE ADMIN USER CAN UPDATE AN ORDER STATUS
    if (currentUser.isAdmin && status) {
      orderToUpdate.status = status;
    }
    // NORMAL USER SHOULD ONLY BE ABLE TO UPDATE "NOTES" OF ORDER ONCE ITS CREATED
    if (currentUser._id === orderToUpdate.hasUser && notes) {
      orderToUpdate.notes = notes;
    }

    const updatedOrder = await orderToUpdate.save();

    return updatedOrder;
  } catch (e) {
    throw new ApolloError(e);
  }
};
