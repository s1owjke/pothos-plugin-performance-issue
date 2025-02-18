import { builder } from "src/builder";

import { CosmicDebriUpdateMany } from "../../types/inputs/cosmicDebri/updateMany";
import { CosmicDebriWhere } from "../../types/inputs/cosmicDebri/where";

builder.mutationField("cosmicDebriUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: CosmicDebriWhere, required: true }),
      data: t.arg({ type: CosmicDebriUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.cosmicDebris.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
