import { builder } from "src/builder";

import { MetaphysicalReceiptWhere } from "../../types/inputs/metaphysicalReceipt/where";

builder.queryField("metaphysicalReceiptCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: MetaphysicalReceiptWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.metaphysicalReceipt.count({ where: args.where || undefined });
    },
  }),
);
