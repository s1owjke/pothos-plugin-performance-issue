import { builder } from "src/builder";

import { InvisibleTransactionWhereUnique } from "../../types/inputs/invisibleTransaction/whereUnique";

builder.mutationField("invisibleTransactionDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [InvisibleTransactionWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.invisibleTransaction.delete({ where })));
      return true;
    },
  }),
);
