const mutations = require("./mutations");
const queries = require("./queries");
const orderSpecifics = require("./orderSpecifics");

module.exports = {
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
  Order: {
    ...orderSpecifics,
  },
};
