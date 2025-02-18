import { builder } from "src/builder";

import { InterdimensionalReceiptWhere } from "../../types/inputs/interdimensionalReceipt/where";

builder.queryField("interdimensionalReceiptCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InterdimensionalReceiptWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.interdimensionalReceipt.count({ where: args.where || undefined });
    },
  }),
);
