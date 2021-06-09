const { ApolloError } = require("apollo-server");

module.exports = async (_, { id, status, notes }, { currentUser, models }) => {
  try {
    const store = models.Store.findOne({ _id: "60b54b0726dffe0dcc3f5065" })
      .populate("newProducts")
      .exec();

    if (!store)
      throw new ApolloError(`Could not find the store with id: '${id}'.`, 400);

    //ONLY THE ADMIN USER CAN UPDATE THE STORE CONFIG
    if (!currentUser.isAdmin) throw new ApolloError("Unauthorized", 400);

    const updatedStore = await store.save();

    return updatedStore;
  } catch (e) {
    throw new ApolloError(e);
  }
};
