import { builder } from "src/builder";

import { MetaphysicalReceiptWhereUnique } from "../../types/inputs/metaphysicalReceipt/whereUnique";

builder.mutationField("metaphysicalReceiptDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [MetaphysicalReceiptWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.metaphysicalReceipt.delete({ where })));
      return true;
    },
  }),
);
