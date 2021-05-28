const { ApolloError, ForbiddenError } = require("apollo-server");

module.exports = async (_, args, { currentUser, models }) => {
  if (!currentUser.isAdmin) {
    throw new ForbiddenError("Unauthorized");
  }

  try {
    const { discountCodes } = args.input;
    const store = await models.Store.find();

    store.discountCodes = discountCodes;

    const updatedStore = await store.save();

    return updatedStore;
  } catch (e) {
    throw new ApolloError(e);
  }
};
