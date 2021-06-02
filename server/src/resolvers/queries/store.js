module.exports = async (_, {}, { models, currentUser }) => {
  if (currentUser && currentUser.isAdmin) {
    return await models.Store.findOne({ _id: "60b54b0726dffe0dcc3f5065" })
      .populate("newProducts")
      .exec();
  }
  let store = await models.Store.findOne({ _id: "60b54b0726dffe0dcc3f5065" })
    .populate("newProducts")
    .exec();
  delete store.discountCodes;
  return store;
};
