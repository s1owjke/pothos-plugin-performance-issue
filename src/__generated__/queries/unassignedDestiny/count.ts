import { builder } from "src/builder";

import { UnassignedDestinyWhere } from "../../types/inputs/unassignedDestiny/where";

builder.queryField("unassignedDestinyCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnassignedDestinyWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unassignedDestiny.count({ where: args.where || undefined });
    },
  }),
);
