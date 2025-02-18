import { builder } from "src/builder";

import { PocketUniverseWhere } from "../../types/inputs/pocketUniverse/where";

builder.queryField("pocketUniverseCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PocketUniverseWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.pocketUniverse.count({ where: args.where || undefined });
    },
  }),
);
