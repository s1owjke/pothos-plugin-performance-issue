import { builder } from "src/builder";

import { MetaphysicalReceiptCreate } from "../../types/inputs/metaphysicalReceipt/create";
import { MetaphysicalReceipt } from "../../types/objects/metaphysicalReceipt";

builder.mutationField("metaphysicalReceiptCreateBatch", (t) =>
  t.field({
    type: [MetaphysicalReceipt],
    nullable: false,
    args: {
      data: t.arg({ type: [MetaphysicalReceiptCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.metaphysicalReceipt.create({ data })));
    },
  }),
);
