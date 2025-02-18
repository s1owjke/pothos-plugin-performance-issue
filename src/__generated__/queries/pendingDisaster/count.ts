import { builder } from "src/builder";

import { PendingDisasterWhere } from "../../types/inputs/pendingDisaster/where";

builder.queryField("pendingDisasterCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PendingDisasterWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.pendingDisaster.count({ where: args.where || undefined });
    },
  }),
);
