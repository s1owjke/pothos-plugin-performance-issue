import { builder } from "src/builder";

import { CosmicDebriWhereUnique } from "../../types/inputs/cosmicDebri/whereUnique";

builder.mutationField("cosmicDebriDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: CosmicDebriWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.cosmicDebris.delete({ where: args.where });
      return true;
    },
  }),
);
