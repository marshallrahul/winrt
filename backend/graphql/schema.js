const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    token: String!
  }

  type Review {
    name: String!
    rating: Int!
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
    rating: Int!
    reviews: [Review!],
    user: User!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type RootMutation {
    createUser(inputData: UserInput!): User!
  }

  type RootQuery {
    products: [Product!]
    product(prodId: ID!): Product!
    login(email: String!, password: String!): User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
