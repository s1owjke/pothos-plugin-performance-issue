import { builder } from "src/builder";

import { LostAndNeverFoundWhere } from "../../types/inputs/lostAndNeverFound/where";

builder.queryField("lostAndNeverFoundCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: LostAndNeverFoundWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.lostAndNeverFound.count({ where: args.where || undefined });
    },
  }),
);
