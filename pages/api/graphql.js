import { ApolloServer, MockList } from "apollo-server-micro";
import { schema } from "../../apollo/schema";
import casual from "casual";

casual.define("todo", (task) => ({ id: casual.uuid, task }));

const mocks = {
  Dog: async () => {
    let { message: displayImage } = await (
      await fetch("https://dog.ceo/api/breeds/image/random")
    ).json();
    return {
      id: casual.uuid,
      breed: casual.word,
      displayImage,
    };
  },

  Author: () => ({
    id: casual.uuid,
    name: casual.name,
  }),

  Comment: () => ({
    id: casual.uuid,
    createdAt: casual.date("YYYY-MM-DD"),
    content: casual.description,
  }),

  Todo: () => ({
    id: casual.uuid,
    task: casual.sentence,
  }),

  User: () => {
    return { id: casual.uuid, firstName: casual.first_name };
  },
  Query: () => ({
    dogs: () => new MockList([3, 5]),
    users: () => new MockList([3, 5]),
    todos: () => new MockList([3, 5]),
    comments: () => new MockList([5, 7]),
  }),

  Mutation: () => ({
    addTodo: (_, { task }) => casual.todo(task),
  }),
};

const apolloServer = new ApolloServer({
  schema,
  context: async () => {},
  mocks,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
