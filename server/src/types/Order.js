const { gql } = require("apollo-server");

module.exports = gql`
  type Adress {
    name: String
    adress: String
    phone: String
  }

  type CartItem {
    id: String!
    skuCode: String!
    name: String!
    price: Float!
    quantity: Int!
  }

  type Order {
    id: ID!
    hasUser: User!
    items: [CartItem!]!
    status: String!
    deliveryInfo: Adress!
    notes: String
    total: Float
    createdAt: String
    updatedAt: String
  }

  input CreateOrderInput {
    items: [CartItemInput!]!
    deliveryInfo: AdressInput
    notes: String
  }

  input CartItemInput {
    id: String!
    quantity: Int!
  }

  input AdressInput {
    name: String
    adress: String
    phone: String
  }

  extend type Query {
    orders: [Order]
  }

  extend type Mutation {
    createOrder(input: CreateOrderInput): Order!
    updateOrder(id: ID!, status: String, notes: String): Order!
  }

  extend type Subscription {
    orderAdded: Order!
  }
`;
