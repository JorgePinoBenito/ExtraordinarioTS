import { GraphQLError } from "graphql";

export const Query = {
  character: async (_: unknown, args: { id: string }) => {
    try {
      const url = "https://rickandmortyapi.com/api/character/" + args.id;
      const data = await fetch(url);

      if (data.status !== 200) {
        console.log("Error", data.status, data.statusText);
        throw new Error("Error");
      }

      const character = await data.json();
      return character;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
  charactersByIds: async (_: unknown, args: { ids: string[] }) => {
    try {
      const url = "https://rickandmortyapi.com/api/character/" + args.ids;
      const data = await fetch(url);

      if (data.status !== 200) {
        console.log("Error", data.status, data.statusText);
        throw new Error("Error");
      }

      const characters = await data.json();
      return characters;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
};
