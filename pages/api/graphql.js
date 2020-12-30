import { ApolloServer, MockList } from "apollo-server-micro";
import { schema } from "../../apollo/schema";
import casual from "casual";
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

  User: () => {
    return { id: casual.uuid, firstName: casual.first_name };
  },
  Query: () => ({
    dogs: () => new MockList([3, 5]),
    users: () => new MockList([3, 5]),
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
