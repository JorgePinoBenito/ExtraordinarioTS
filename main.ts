import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { CharacterChained } from "./resolvers/character.ts";
import { LocationChained } from "./resolvers/location.ts";
import { EpisodeChained } from "./resolvers/episode.ts";
import { typeDefs } from "./gql/schema.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    CharacterChained,
    EpisodeChained,
    LocationChained,
  },
});

const { url } = await startStandaloneServer(server, { listen: 8000 });
console.info(`🚀 Server ready at ${url}`);
