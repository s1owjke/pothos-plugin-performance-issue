import { builder } from "src/builder";

import { MetaphysicalReceiptCreateMany } from "../../types/inputs/metaphysicalReceipt/createMany";

builder.mutationField("metaphysicalReceiptCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [MetaphysicalReceiptCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.metaphysicalReceipt.createMany({ data: args.data });
      return count;
    },
  }),
);
