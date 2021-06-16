const { ApolloError } = require("apollo-server");

module.exports = async (_, { id, disable }, { models }) => {
  try {
    const productToUpdate = await models.Product.findOne({ _id: id });

    if (!productToUpdate)
      throw new ApolloError(`Could not find product with id: '${id}'.`, 400);

    productToUpdate.disable = disable;

    const updatedProduct = await productToUpdate.save();

    return updatedProduct;
  } catch (e) {
    throw new ApolloError(e);
  }
};
