import { builder } from "src/builder";

import { RedundantDuplicationWhere } from "../../types/inputs/redundantDuplication/where";

builder.queryField("redundantDuplicationCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RedundantDuplicationWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.redundantDuplication.count({ where: args.where || undefined });
    },
  }),
);
