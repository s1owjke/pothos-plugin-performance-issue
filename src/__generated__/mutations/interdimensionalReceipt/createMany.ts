import { builder } from "src/builder";

import { InterdimensionalReceiptCreateMany } from "../../types/inputs/interdimensionalReceipt/createMany";

builder.mutationField("interdimensionalReceiptCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [InterdimensionalReceiptCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.interdimensionalReceipt.createMany({ data: args.data });
      return count;
    },
  }),
);
