import { builder } from "src/builder";

import { PocketUniverseWhereUnique } from "../../types/inputs/pocketUniverse/whereUnique";

builder.mutationField("pocketUniverseDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: PocketUniverseWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.pocketUniverse.delete({ where: args.where });
      return true;
    },
  }),
);
