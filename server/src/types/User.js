const { gql } = require("apollo-server");

module.exports = gql`
  type UserInfo {
    name: String!
    adress: String
    phone: String
  }

  type User {
    id: ID!
    username: String!
    orders: [Order]!
    info: UserInfo
    isAdmin: Boolean
  }

  type Token {
    value: String!
  }

  input CreateUserInput {
    username: String!
    password: String!
    name: String!
    adress: String
    phone: String
  }

  input UpdateUserInput {
    password: String!
    newPassword: String
    name: String
    adress: String
    phone: String
  }

  input LoginUserInput {
    username: String!
    password: String!
    name: String
    adress: String
    phone: String
  }

  extend type Query {
    users: [User]
    me: User
  }

  extend type Mutation {
    createUser(input: CreateUserInput): User!
    updateUser(input: UpdateUserInput): User!
    loginUser(input: LoginUserInput): Token
  }
`;
