const mutations = require("./mutations");
const queries = require("./queries");
const subscriptions = require("./subscriptions");
const orderSpecifics = require("./orderSpecifics");

module.exports = {
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
  Subscription: {
    ...subscriptions,
  },
  Order: {
    ...orderSpecifics,
  },
};
