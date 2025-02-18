import { builder } from "src/builder";

import { MetaphysicalReceiptWhere } from "../../types/inputs/metaphysicalReceipt/where";

builder.mutationField("metaphysicalReceiptDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: MetaphysicalReceiptWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.metaphysicalReceipt.deleteMany({ where: args.where });
      return count;
    },
  }),
);
