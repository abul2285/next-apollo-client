import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
    stars: Int
  }

  type Todo {
    id: ID!
    task: String!
  }

  type Author {
    id: ID!
    name: String!
  }

  type Comment {
    id: ID!
    postedBy: Author!
    createdAt: String!
    content: String!
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
    todos: [Todo!]!
    comments: [Comment!]!
  }

  type Mutation {
    addTodo(task: String!): Todo!
    updateTodo(id: ID!, task: String): Todo!
  }
`;
