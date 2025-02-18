import { builder } from "src/builder";

import { PocketUniverseWhere } from "../../types/inputs/pocketUniverse/where";

builder.mutationField("pocketUniverseDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PocketUniverseWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.pocketUniverse.deleteMany({ where: args.where });
      return count;
    },
  }),
);
