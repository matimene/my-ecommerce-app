const { ApolloError } = require("apollo-server");

module.exports = async (_, args, { models }) => {
  const { name, skuCode, description, category, price } = args.input;
  console.log("args createproduct: ", args);
  try {
    const product = new models.Product({
      name,
      skuCode,
      description,
      category,
      price,
      disable: false,
    });
    await product.save();
    return product;
  } catch (e) {
    throw new ApolloError(e);
  }
};
