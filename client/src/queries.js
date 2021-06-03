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
      info {
        name
        adress
        phone
      }
      orders {
        items {
          name
          price
          quantity
        }
        total
        status
      }
    }
  }
`;
