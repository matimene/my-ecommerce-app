module.exports = {
  total: async (root, args, { models }) => {
    const totalPrice = root.items
      .map((i) => i.quantity * i.price)
      .reduce((a, b) => a + b, 0);
    return Math.round(totalPrice * 100) / 100;
  },
};
