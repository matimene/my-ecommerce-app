const { gql } = require("apollo-server");

module.exports = gql`
  type Store {
    newProducts: [Product!]!
    categories: [String!]!
    filters: [String!]!
    discountCodes: [String]
  }

  input NewProductsInput {
    newProducts: [String!]!
  }

  input CategoriesInput {
    categories: [String!]!
  }

  input FiltersInput {
    filters: [String!]!
  }

  input DiscountCodesInput {
    discountCodes: [String]!
  }

  input CreateStoreInput {
    newProducts: [String]
    categories: [String]
    filters: [String]
    discountCodes: [String]
  }

  extend type Query {
    store: Store!
  }

  extend type Mutation {
    createStoreConfig(input: CreateStoreInput): Store!
    setNewProducts(input: NewProductsInput): Store!
    setCategories(input: CategoriesInput): Store!
    setFilters(input: FiltersInput): Store!
    setDiscountCodes(input: DiscountCodesInput): Store!
  }
`;
