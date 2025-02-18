import { builder } from "src/builder";

import { PocketUniverseCreateMany } from "../../types/inputs/pocketUniverse/createMany";

builder.mutationField("pocketUniverseCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [PocketUniverseCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.pocketUniverse.createMany({ data: args.data });
      return count;
    },
  }),
);
