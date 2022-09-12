import { ApolloServer } from "apollo-server-fastify";
import { getSchema } from "./schema";

it('returns character names', async () => {
    const testServer = new ApolloServer({
    schema: await getSchema(),
  });

  const result = await testServer.executeOperation({
    query: `query { 
      characters { 
        results { 
          name 
        }
      } 
    }`,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data?.characters).not.toBe(null);
});

