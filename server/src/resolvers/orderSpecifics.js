module.exports = {
  // createdAt: async (root, args, { models }) => {
  //   const order = await models.Order.find({ id: root.id });
  //   return order.createdAt.toString();
  // },
  // updatedAt: async (root, args, { models }) => {
  //   const order = await models.Order.find({ id: root.id });
  //   return order.updatedAt.toString();
  // },
  total: async (root, args, { models }) => {
    const totalPrice = root.items
      .map((i) => i.quantity * i.price)
      .reduce((a, b) => a + b, 0);
    return totalPrice;
  },
};
