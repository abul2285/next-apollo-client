import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
    stars: Int
  }

  type Dog {
    id: ID!
    breed: String!
    displayImage: String!
  }
  type Query {
    users: [User]!
    dogs: [Dog!]!
    dog(breed: String): Dog!
  }
`;
