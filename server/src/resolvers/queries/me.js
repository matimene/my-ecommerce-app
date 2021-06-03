module.exports = async (_, {}, { currentUser }) => {
  return currentUser.populate("orders").execPopulate();
};
