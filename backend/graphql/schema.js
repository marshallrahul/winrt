const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type CartItems {
    items: [Product]
    quantity: Int
  }

  type User {
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    cart: [CartItems!]
  }

  type Review {
    name: String!
    rating: String!
    comment: String!
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type Product {
    name: String!
    image: String!
    description: String!
    price: Int!
    countInStock: Int!
    rating: String!
    reviews: [Review!],
    user: User!
  }

  type RootQuery {
    products: [Product!]
    cartItems(id: ID!): [CartItems!]
  }

  schema {
    query: RootQuery
  }
`);
