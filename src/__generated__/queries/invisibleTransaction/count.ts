import { builder } from "src/builder";

import { InvisibleTransactionWhere } from "../../types/inputs/invisibleTransaction/where";

builder.queryField("invisibleTransactionCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InvisibleTransactionWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.invisibleTransaction.count({ where: args.where || undefined });
    },
  }),
);
