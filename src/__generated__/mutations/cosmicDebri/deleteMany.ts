import { builder } from "src/builder";

import { CosmicDebriWhere } from "../../types/inputs/cosmicDebri/where";

builder.mutationField("cosmicDebriDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: CosmicDebriWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.cosmicDebris.deleteMany({ where: args.where });
      return count;
    },
  }),
);
