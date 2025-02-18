import { builder } from "src/builder";

import { InvisibleTransactionUpdateMany } from "../../types/inputs/invisibleTransaction/updateMany";
import { InvisibleTransactionWhere } from "../../types/inputs/invisibleTransaction/where";

builder.mutationField("invisibleTransactionUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InvisibleTransactionWhere, required: true }),
      data: t.arg({ type: InvisibleTransactionUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.invisibleTransaction.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
