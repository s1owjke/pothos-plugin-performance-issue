import { builder } from "src/builder";

import { ReverseTransactionUpdate } from "../../types/inputs/reverseTransaction/update";
import { ReverseTransactionWhereUnique } from "../../types/inputs/reverseTransaction/whereUnique";
import { ReverseTransaction } from "../../types/objects/reverseTransaction";

builder.mutationField("reverseTransactionUpdate", (t) =>
  t.field({
    type: ReverseTransaction,
    nullable: false,
    args: {
      where: t.arg({ type: ReverseTransactionWhereUnique, required: true }),
      data: t.arg({ type: ReverseTransactionUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.reverseTransaction.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
