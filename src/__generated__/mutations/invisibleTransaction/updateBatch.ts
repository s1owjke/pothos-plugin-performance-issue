import { builder } from "src/builder";

import { InvisibleTransactionUpdate } from "../../types/inputs/invisibleTransaction/update";
import { InvisibleTransactionWhereUnique } from "../../types/inputs/invisibleTransaction/whereUnique";
import { InvisibleTransaction } from "../../types/objects/invisibleTransaction";

builder.mutationField("invisibleTransactionUpdateBatch", (t) =>
  t.field({
    type: [InvisibleTransaction],
    nullable: false,
    args: {
      where: t.arg({ type: [InvisibleTransactionWhereUnique], required: true }),
      data: t.arg({ type: [InvisibleTransactionUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.invisibleTransaction.update({ where, data });
        }),
      );
    },
  }),
);
