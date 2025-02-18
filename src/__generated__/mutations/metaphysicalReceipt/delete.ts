import { builder } from "src/builder";

import { MetaphysicalReceiptWhereUnique } from "../../types/inputs/metaphysicalReceipt/whereUnique";

builder.mutationField("metaphysicalReceiptDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: MetaphysicalReceiptWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.metaphysicalReceipt.delete({ where: args.where });
      return true;
    },
  }),
);
