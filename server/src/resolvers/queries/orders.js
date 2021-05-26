module.exports = async (_, {}, { models, currentUser }) => {
  if (currentUser.isAdmin) {
    return await models.Order.find().populate("items").exec();
  }
  return await models.Order.find({ hasUser: currentUser.id })
    .populate("items")
    .exec();
};
