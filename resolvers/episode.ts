import { Episode, Character } from "../types.ts";
import { GraphQLError } from "graphql";
export const EpisodeChained = {
  characters: async (parent: Episode): Promise<Character[]> => {
    try {
      const charactersids = parent.characters.map(function (x) {
        return x.id;
      });
      const url = " https://rickandmortyapi.com/api/character/" + charactersids;
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
