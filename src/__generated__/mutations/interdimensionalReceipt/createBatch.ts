import { builder } from "src/builder";

import { InterdimensionalReceiptCreate } from "../../types/inputs/interdimensionalReceipt/create";
import { InterdimensionalReceipt } from "../../types/objects/interdimensionalReceipt";

builder.mutationField("interdimensionalReceiptCreateBatch", (t) =>
  t.field({
    type: [InterdimensionalReceipt],
    nullable: false,
    args: {
      data: t.arg({ type: [InterdimensionalReceiptCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.interdimensionalReceipt.create({ data })));
    },
  }),
);
