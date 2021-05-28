const { ApolloError, ForbiddenError } = require("apollo-server");

module.exports = async (_, args, { currentUser, models }) => {
  if (!currentUser.isAdmin) {
    throw new ForbiddenError("Unauthorized");
  }

  try {
    const { newProducts } = args.input;
    const store = await models.Store.find();

    newProducts.map(async (product) => {
      return await models.Product.findOne({ skuCode: product });
    });

    store.newProducts = newProducts;

    const updatedStore = await store.save();

    return updatedStore;
  } catch (e) {
    throw new ApolloError(e);
  }
};
