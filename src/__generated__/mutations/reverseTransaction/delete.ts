import { builder } from "src/builder";

import { ReverseTransactionWhereUnique } from "../../types/inputs/reverseTransaction/whereUnique";

builder.mutationField("reverseTransactionDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ReverseTransactionWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.reverseTransaction.delete({ where: args.where });
      return true;
    },
  }),
);
