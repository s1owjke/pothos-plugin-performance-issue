import { builder } from "src/builder";

import { MetaphysicalReceiptUpdate } from "../../types/inputs/metaphysicalReceipt/update";
import { MetaphysicalReceiptWhereUnique } from "../../types/inputs/metaphysicalReceipt/whereUnique";
import { MetaphysicalReceipt } from "../../types/objects/metaphysicalReceipt";

builder.mutationField("metaphysicalReceiptUpdateBatch", (t) =>
  t.field({
    type: [MetaphysicalReceipt],
    nullable: false,
    args: {
      where: t.arg({ type: [MetaphysicalReceiptWhereUnique], required: true }),
      data: t.arg({ type: [MetaphysicalReceiptUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.metaphysicalReceipt.update({ where, data });
        }),
      );
    },
  }),
);
