import { builder } from "src/builder";

import { InterdimensionalReceiptUpdate } from "../../types/inputs/interdimensionalReceipt/update";
import { InterdimensionalReceiptWhereUnique } from "../../types/inputs/interdimensionalReceipt/whereUnique";
import { InterdimensionalReceipt } from "../../types/objects/interdimensionalReceipt";

builder.mutationField("interdimensionalReceiptUpdateBatch", (t) =>
  t.field({
    type: [InterdimensionalReceipt],
    nullable: false,
    args: {
      where: t.arg({ type: [InterdimensionalReceiptWhereUnique], required: true }),
      data: t.arg({ type: [InterdimensionalReceiptUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.interdimensionalReceipt.update({ where, data });
        }),
      );
    },
  }),
);
