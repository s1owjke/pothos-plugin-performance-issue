import { builder } from "src/builder";

import { PocketUniverseWhereUnique } from "../../types/inputs/pocketUniverse/whereUnique";

builder.mutationField("pocketUniverseDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [PocketUniverseWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.pocketUniverse.delete({ where })));
      return true;
    },
  }),
);
