import { builder } from "src/builder";

import { CosmicDebriWhere } from "../../types/inputs/cosmicDebri/where";

builder.queryField("cosmicDebriCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: CosmicDebriWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.cosmicDebris.count({ where: args.where || undefined });
    },
  }),
);
