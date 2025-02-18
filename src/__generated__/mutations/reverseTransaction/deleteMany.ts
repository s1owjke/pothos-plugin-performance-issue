import { builder } from "src/builder";

import { ReverseTransactionWhere } from "../../types/inputs/reverseTransaction/where";

builder.mutationField("reverseTransactionDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ReverseTransactionWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.reverseTransaction.deleteMany({ where: args.where });
      return count;
    },
  }),
);
