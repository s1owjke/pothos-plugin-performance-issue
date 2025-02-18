import { builder } from "src/builder";

import { InterdimensionalReceiptUpdate } from "../../types/inputs/interdimensionalReceipt/update";
import { InterdimensionalReceiptWhereUnique } from "../../types/inputs/interdimensionalReceipt/whereUnique";
import { InterdimensionalReceipt } from "../../types/objects/interdimensionalReceipt";

builder.mutationField("interdimensionalReceiptUpdate", (t) =>
  t.field({
    type: InterdimensionalReceipt,
    nullable: false,
    args: {
      where: t.arg({ type: InterdimensionalReceiptWhereUnique, required: true }),
      data: t.arg({ type: InterdimensionalReceiptUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.interdimensionalReceipt.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
