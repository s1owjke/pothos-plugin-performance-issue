import { builder } from "src/builder";

import { MetaphysicalReceiptUpdateMany } from "../../types/inputs/metaphysicalReceipt/updateMany";
import { MetaphysicalReceiptWhere } from "../../types/inputs/metaphysicalReceipt/where";

builder.mutationField("metaphysicalReceiptUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: MetaphysicalReceiptWhere, required: true }),
      data: t.arg({ type: MetaphysicalReceiptUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.metaphysicalReceipt.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
