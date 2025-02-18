import { builder } from "src/builder";

import { InterdimensionalReceiptWhere } from "../../types/inputs/interdimensionalReceipt/where";

builder.mutationField("interdimensionalReceiptDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InterdimensionalReceiptWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.interdimensionalReceipt.deleteMany({ where: args.where });
      return count;
    },
  }),
);
