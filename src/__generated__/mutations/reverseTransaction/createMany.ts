import { builder } from "src/builder";

import { ReverseTransactionCreateMany } from "../../types/inputs/reverseTransaction/createMany";

builder.mutationField("reverseTransactionCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ReverseTransactionCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.reverseTransaction.createMany({ data: args.data });
      return count;
    },
  }),
);
