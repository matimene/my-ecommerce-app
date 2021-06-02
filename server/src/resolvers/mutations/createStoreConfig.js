const { ApolloError } = require("apollo-server");

module.exports = async (_, args, { models }) => {
  try {
    const { newProducts, categories, filters, discountCodes } = args.input;
    const productsArr = await Promise.all(
      newProducts.map(async (product) => {
        return await models.Product.findOne({ skuCode: product });
      })
    );

    const store = new models.Store({
      newProducts: productsArr,
      categories,
      filters,
      discountCodes,
    });
    await store.save();
    return store;
  } catch (e) {
    throw new ApolloError(e);
  }
};
