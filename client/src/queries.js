import { gql } from "@apollo/client";

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

export const UPDATE_ORDER_STATUS = gql`
  mutation updateOrder($id: ID!, $status: String!) {
    updateOrder(id: $id, status: $status) {
      id
      status
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
