const { ApolloError, ForbiddenError } = require("apollo-server");

module.exports = async (_, args, { currentUser, models }) => {
  if (!currentUser.isAdmin) {
    throw new ForbiddenError("Unauthorized");
  }

  try {
    const { categories } = args.input;
    const store = await models.Store.find();

    store.categories = categories;

    const updatedStore = await store.save();

    return updatedStore;
  } catch (e) {
    throw new ApolloError(e);
  }
};
