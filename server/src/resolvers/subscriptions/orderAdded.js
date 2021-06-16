module.exports = {
  subscribe: (_, {}, { pubsub }) => pubsub.asyncIterator(["ORDER_ADDED"]),
};
