const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type CartItems {
    items: [Product]
    quantity: Int
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    cart: [CartItems!]
    token: String!
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
    _id: ID!
    name: String!
    image: String!
    description: String!
    price: Int!
    countInStock: Int!
    rating: String!
    reviews: [Review!],
    user: User!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type RootMutation {
    addToCart(id: ID!): Product! 
    createUser(inputData: UserInput!): User!
  }

  type RootQuery {
    products: [Product!]
    product(prodId: ID!): Product!
    cartItems(id: ID!): [CartItems!]
    login(email: String!, password: String!): User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
