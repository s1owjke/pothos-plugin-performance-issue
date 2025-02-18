import { builder } from "src/builder";

import { InterdimensionalReceiptWhereUnique } from "../../types/inputs/interdimensionalReceipt/whereUnique";

builder.mutationField("interdimensionalReceiptDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [InterdimensionalReceiptWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.interdimensionalReceipt.delete({ where })));
      return true;
    },
  }),
);
