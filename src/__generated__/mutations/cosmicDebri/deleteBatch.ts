import { builder } from "src/builder";

import { CosmicDebriWhereUnique } from "../../types/inputs/cosmicDebri/whereUnique";

builder.mutationField("cosmicDebriDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [CosmicDebriWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.cosmicDebris.delete({ where })));
      return true;
    },
  }),
);
