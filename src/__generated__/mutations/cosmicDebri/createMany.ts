import { builder } from "src/builder";

import { CosmicDebriCreateMany } from "../../types/inputs/cosmicDebri/createMany";

builder.mutationField("cosmicDebriCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [CosmicDebriCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.cosmicDebris.createMany({ data: args.data });
      return count;
    },
  }),
);
