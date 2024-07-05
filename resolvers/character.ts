import { Episode, Character, Location } from "../types.ts";
import { GraphQLError } from "graphql";

export const CharacterChained = {
  episodes: async (parent: Character): Promise<Episode[]> => {
    try {
      const episodesids = parent.episode.map(function (x) {
        return x.id.toString();
      });

      const url = " https://rickandmortyapi.com/api/episode/" + episodesids;
      const data = await fetch(url);

      if (data.status !== 200) {
        console.log("Error", data.status, data.statusText);
        throw new Error("Error");
      }

      const episodes = await data.json();
      return episodes;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
  location: async (parent: Character): Promise<Location[]> => {
    try {
      const url =
        " https://rickandmortyapi.com/api/location/" + parent.location.id;
      const data = await fetch(url);

      if (data.status !== 200) {
        console.log("Error", data.status, data.statusText);
        throw new Error("Error");
      }

      const locations = await data.json();
      return locations;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
};
