module.exports = async (_, {}, { models, currentUser }) => {
  if (currentUser.isAdmin) {
    return await models.User.find();
  }
};
