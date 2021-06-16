import { gql } from "@apollo/client";

//CLIENT QUERIES

export const PRODUCTS = gql`
  query {
    products {
      name
      skuCode
      description
      category
      subCategories
      imgUrl
      price
      disable
      id
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $imgUrl: String!
    $category: String!
    $subCategories: [String]!
    $price: Float!
    $description: String!
    $skuCode: String!
  ) {
    createProduct(
      input: {
        name: $name
        imgUrl: $imgUrl
        category: $category
        subCategories: $subCategories
        price: $price
        description: $description
        skuCode: $skuCode
      }
    ) {
      id
      name
      skuCode
      description
      category
      subCategories
      imgUrl
      price
      disable
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: String!
    $name: String!
    $imgUrl: String!
    $category: String!
    $subCategories: [String]!
    $price: Float!
    $description: String!
    $skuCode: String!
  ) {
    updateProduct(
      id: $id
      input: {
        name: $name
        imgUrl: $imgUrl
        category: $category
        subCategories: $subCategories
        price: $price
        description: $description
        skuCode: $skuCode
      }
    ) {
      id
      name
      skuCode
      description
      category
      subCategories
      imgUrl
      price
      disable
      id
    }
  }
`;

export const DISABLE_PRODUCT = gql`
  mutation disableProduct($id: String!, $disable: Boolean!) {
    disableProduct(id: $id, disable: $disable) {
      id
      disable
    }
  }
`;

export const FILTERED_PRODUCTS = gql`
  query products($filter: String) {
    products(filter: $filter) {
      name
      skuCode
      description
      category
      subCategories
      imgUrl
      price
      disable
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(input: { username: $username, password: $password }) {
      value
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!, $username: String!, $password: String!) {
    createUser(
      input: { name: $name, username: $username, password: $password }
    ) {
      username
      info {
        name
      }
    }
  }
`;

export const STORE_CONFIG = gql`
  query {
    store {
      newProducts {
        name
        price
        imgUrl
        id
        skuCode
      }
      categories
      filters
    }
  }
`;

export const ME = gql`
  query {
    me {
      username
      info {
        name
        adress
        phone
      }
      orders {
        status
        total
        items {
          name
          price
          quantity
        }
      }
      isAdmin
    }
  }
`;

export const ORDERS = gql`
  query {
    orders {
      id
      status
      total
      items {
        name
        price
        quantity
      }
      deliveryInfo {
        name
        adress
        phone
      }
      notes
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $password: String!
    $name: String!
    $adress: String!
    $phone: String!
    $newPassword: String
  ) {
    updateUser(
      input: {
        password: $password
        name: $name
        adress: $adress
        phone: $phone
        newPassword: $newPassword
      }
    ) {
      info {
        name
        adress
        phone
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder(
    $items: [CartItemInput!]!
    $deliveryInfo: AdressInput
    $notes: String
  ) {
    createOrder(
      input: { items: $items, deliveryInfo: $deliveryInfo, notes: $notes }
    ) {
      id
      total
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation createOrder(
    $items: [CartItemInput!]!
    $deliveryInfo: AdressInput
    $notes: String
  ) {
    createOrder(
      input: { items: $items, deliveryInfo: $deliveryInfo, notes: $notes }
    ) {
      id
      total
    }
  }
`;

// ADMIN QUERIES

export const UPDATE_ORDER_STATUS = gql`
  mutation updateOrder($id: ID!, $status: String!) {
    updateOrder(id: $id, status: $status) {
      id
      status
    }
  }
`;

export const SET_CATEGORIES = gql`
  mutation setCategories($categories: [String!]!) {
    setCategories(input: { categories: $categories }) {
      id
      status
    }
  }
`;

export const SET_FILTERS = gql`
  mutation setFilters($filters: [String!]!) {
    setFilters(input: { filters: $filters }) {
      id
      status
    }
  }
`;

export const SET_NEW_PRODUCTS = gql`
  mutation setNewProducts($newProducts: [String!]!) {
    setNewProducts(input: { newProducts: $newProducts }) {
      id
      status
    }
  }
`;

export const SET_DISCOUNT_CODES = gql`
  mutation setDiscountCodes($discountCodes: [String]!) {
    setDiscountCodes(input: { discountCodes: $discountCodes }) {
      id
      status
    }
  }
`;

export const ORDER_ADDED = gql`
  subscription {
    orderAdded {
      id
      status
      total
      items {
        name
        price
        quantity
      }
      deliveryInfo {
        name
        adress
        phone
      }
      notes
    }
  }
`;
