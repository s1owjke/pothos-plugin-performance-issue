import { builder } from "src/builder";

import { PocketUniverseUpdateMany } from "../../types/inputs/pocketUniverse/updateMany";
import { PocketUniverseWhere } from "../../types/inputs/pocketUniverse/where";

builder.mutationField("pocketUniverseUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PocketUniverseWhere, required: true }),
      data: t.arg({ type: PocketUniverseUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.pocketUniverse.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
