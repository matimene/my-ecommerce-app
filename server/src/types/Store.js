const { gql } = require("apollo-server");

module.exports = gql`
  type Store {
    newProducts: Product!
    categories: [String!]!
    filters: [String!]!
    discountCodes: String
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

  extend type Query {
    storeData: Store
  }

  extend type Mutation {
    setNewProducts(input: NewProductsInput): Store!
    setCategories(input: CategoriesInput): Store!
    setFilters(input: FiltersInput): Store!
    setDiscountCodes(input: DiscountCodesInput): Store!
  }
`;
