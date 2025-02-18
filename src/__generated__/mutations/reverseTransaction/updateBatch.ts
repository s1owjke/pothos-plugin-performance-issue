import { builder } from "src/builder";

import { ReverseTransactionUpdate } from "../../types/inputs/reverseTransaction/update";
import { ReverseTransactionWhereUnique } from "../../types/inputs/reverseTransaction/whereUnique";
import { ReverseTransaction } from "../../types/objects/reverseTransaction";

builder.mutationField("reverseTransactionUpdateBatch", (t) =>
  t.field({
    type: [ReverseTransaction],
    nullable: false,
    args: {
      where: t.arg({ type: [ReverseTransactionWhereUnique], required: true }),
      data: t.arg({ type: [ReverseTransactionUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.reverseTransaction.update({ where, data });
        }),
      );
    },
  }),
);
