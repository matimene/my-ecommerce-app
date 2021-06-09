const { ApolloError, ForbiddenError } = require("apollo-server");

module.exports = async (_, args, { currentUser, models }) => {
  if (!currentUser.isAdmin) {
    throw new ForbiddenError("Unauthorized");
  }

  try {
    // newProducts = [skuCode]
    const { newProducts } = args.input;
    const store = await models.Store.find();

    newProducts.map(async (product) => {
      const productBySkuCode = await models.Product.findOne({
        skuCode: product,
      });
      if (!productBySkuCode)
        throw new ApolloError("Cant find product with that sku code");
      return productBySkuCode;
    });

    store.newProducts = newProducts;

    const updatedStore = await store.save();

    return updatedStore;
  } catch (e) {
    throw new ApolloError(e);
  }
};
