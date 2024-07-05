import { Location, Character } from "../types.ts";
import { GraphQLError } from "graphql";
export const LocationChained = {
  residents: async (parent: Location): Promise<Character[]> => {
    try {
      const residentsids = parent.residents.map(function (x) {
        return x.id;
      });

      const url = " https://rickandmortyapi.com/api/character/" + residentsids;
      const data = await fetch(url);

      if (data.status !== 200) {
        console.log("Error", data.status, data.statusText);
        throw new Error("Error");
      }

      const residents = await data.json();
      return residents;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
};
