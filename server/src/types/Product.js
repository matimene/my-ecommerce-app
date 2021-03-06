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

  input EditProductInput {
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
    products(filter: String): [Product]
  }

  extend type Mutation {
    createProduct(input: ProductInput): Product!
    updateProduct(id: String!, input: EditProductInput): Product!
    disableProduct(id: String!, disable: Boolean!): Product!
  }
`;
