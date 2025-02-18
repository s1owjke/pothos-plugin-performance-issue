import { builder } from "src/builder";

import { InterdimensionalReceiptUpdateMany } from "../../types/inputs/interdimensionalReceipt/updateMany";
import { InterdimensionalReceiptWhere } from "../../types/inputs/interdimensionalReceipt/where";

builder.mutationField("interdimensionalReceiptUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InterdimensionalReceiptWhere, required: true }),
      data: t.arg({ type: InterdimensionalReceiptUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.interdimensionalReceipt.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
