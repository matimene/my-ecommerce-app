const { ApolloError, ForbiddenError } = require("apollo-server");

module.exports = async (_, args, { currentUser, models }) => {
  if (!currentUser.isAdmin) {
    throw new ForbiddenError("Unauthorized");
  }

  try {
    const { filters } = args.input;
    const store = await models.Store.find();

    store.filters = filters;

    const updatedStore = await store.save();

    return updatedStore;
  } catch (e) {
    throw new ApolloError(e);
  }
};
