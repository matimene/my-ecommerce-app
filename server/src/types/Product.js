const { gql } = require("apollo-server");

module.exports = gql`
  input ProductInput {
    name: String!
    skuCode: String!
    description: String!
    category: String!
    subCategories: [String]
    imgUrl: String
    price: Float!
    disable: Boolean
  }

  type Product {
    id: ID!
    name: String!
    skuCode: String!
    description: String!
    category: String!
    subCategories: [String]
    imgUrl: String
    price: Float!
    disable: Boolean
  }

  extend type Query {
    products: [Product]
  }

  extend type Mutation {
    createProduct(input: ProductInput): Product!
    updateProduct(id: ID!, input: ProductInput): Product!
  }
`;
