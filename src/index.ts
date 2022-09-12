import { ApolloServer } from "apollo-server-fastify";
import fastify from "fastify";
import { getSchema } from "./schema";

const start = async () => {
  const graphQLServer = new ApolloServer({
    schema: await getSchema()
  });
  await graphQLServer.start();

  const app = fastify();
  app.register(graphQLServer.createHandler({
    path: '/graphql',
  }));
  await app.listen(9000, '0.0.0.0');
}

start();
