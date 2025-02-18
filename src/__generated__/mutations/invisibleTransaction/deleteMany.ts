import { builder } from "src/builder";

import { InvisibleTransactionWhere } from "../../types/inputs/invisibleTransaction/where";

builder.mutationField("invisibleTransactionDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InvisibleTransactionWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.invisibleTransaction.deleteMany({ where: args.where });
      return count;
    },
  }),
);
