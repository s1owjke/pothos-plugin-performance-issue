import { builder } from "src/builder";

import { ReverseTransactionWhere } from "../../types/inputs/reverseTransaction/where";

builder.queryField("reverseTransactionCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ReverseTransactionWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.reverseTransaction.count({ where: args.where || undefined });
    },
  }),
);
