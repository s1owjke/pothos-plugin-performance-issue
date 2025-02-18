import { builder } from "src/builder";

import { InterdimensionalReceiptWhereUnique } from "../../types/inputs/interdimensionalReceipt/whereUnique";

builder.mutationField("interdimensionalReceiptDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: InterdimensionalReceiptWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.interdimensionalReceipt.delete({ where: args.where });
      return true;
    },
  }),
);
