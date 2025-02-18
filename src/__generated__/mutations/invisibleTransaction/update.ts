import { builder } from "src/builder";

import { InvisibleTransactionUpdate } from "../../types/inputs/invisibleTransaction/update";
import { InvisibleTransactionWhereUnique } from "../../types/inputs/invisibleTransaction/whereUnique";
import { InvisibleTransaction } from "../../types/objects/invisibleTransaction";

builder.mutationField("invisibleTransactionUpdate", (t) =>
  t.field({
    type: InvisibleTransaction,
    nullable: false,
    args: {
      where: t.arg({ type: InvisibleTransactionWhereUnique, required: true }),
      data: t.arg({ type: InvisibleTransactionUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.invisibleTransaction.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
