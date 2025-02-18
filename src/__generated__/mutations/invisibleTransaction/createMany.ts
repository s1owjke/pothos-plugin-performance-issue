import { builder } from "src/builder";

import { InvisibleTransactionCreateMany } from "../../types/inputs/invisibleTransaction/createMany";

builder.mutationField("invisibleTransactionCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [InvisibleTransactionCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.invisibleTransaction.createMany({ data: args.data });
      return count;
    },
  }),
);
