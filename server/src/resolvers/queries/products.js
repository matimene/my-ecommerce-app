module.exports = async (_, { filter }, { models }) => {
  if (filter) {
    return await models.Product.find().or([
      { category: filter },
      { subCategories: filter },
    ]);
  }

  return await models.Product.find();
};
