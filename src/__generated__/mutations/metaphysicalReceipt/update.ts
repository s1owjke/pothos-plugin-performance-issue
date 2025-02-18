import { builder } from "src/builder";

import { MetaphysicalReceiptUpdate } from "../../types/inputs/metaphysicalReceipt/update";
import { MetaphysicalReceiptWhereUnique } from "../../types/inputs/metaphysicalReceipt/whereUnique";
import { MetaphysicalReceipt } from "../../types/objects/metaphysicalReceipt";

builder.mutationField("metaphysicalReceiptUpdate", (t) =>
  t.field({
    type: MetaphysicalReceipt,
    nullable: false,
    args: {
      where: t.arg({ type: MetaphysicalReceiptWhereUnique, required: true }),
      data: t.arg({ type: MetaphysicalReceiptUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.metaphysicalReceipt.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
