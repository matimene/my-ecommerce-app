const { gql } = require("apollo-server");

module.exports = gql`
  input ProductInput {
    name: String!
    skuCode: String!
    description: String!
    category: Categories!
    price: Float!
    subCategory: [Subcategories]
    disable: Boolean
  }

  enum Categories {
    BASIC
    COMPLEX
    ANYTHING
  }

  enum Subcategories {
    subBASIC
    subCOMPLEX
    subANYTHING
  }

  type Product {
    id: ID!
    name: String!
    skuCode: String!
    description: String!
    category: Categories!
    subCategory: [Subcategories]
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
