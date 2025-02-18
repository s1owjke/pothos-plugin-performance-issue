import { builder } from "src/builder";

import { InvisibleTransactionWhereUnique } from "../../types/inputs/invisibleTransaction/whereUnique";

builder.mutationField("invisibleTransactionDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: InvisibleTransactionWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.invisibleTransaction.delete({ where: args.where });
      return true;
    },
  }),
);
