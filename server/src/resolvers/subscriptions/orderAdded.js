const pubsub = require("../../config/pubsub");

module.exports = {
  subscribe: () => pubsub.asyncIterator(["ORDER_ADDED"]),
};
