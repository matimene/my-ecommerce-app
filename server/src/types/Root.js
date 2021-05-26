const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    _root: String
  }
  type Mutation {
    _root: String
  }
  type Subscription {
    _root: String
  }
`;
