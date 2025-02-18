import { builder } from "src/builder";

import { ReverseTransactionWhereUnique } from "../../types/inputs/reverseTransaction/whereUnique";

builder.mutationField("reverseTransactionDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ReverseTransactionWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.reverseTransaction.delete({ where })));
      return true;
    },
  }),
);
