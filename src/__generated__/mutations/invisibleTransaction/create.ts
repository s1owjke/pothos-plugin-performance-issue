import { builder } from "src/builder";

import { InvisibleTransactionCreate } from "../../types/inputs/invisibleTransaction/create";
import { InvisibleTransaction } from "../../types/objects/invisibleTransaction";

builder.mutationField("invisibleTransactionCreate", (t) =>
  t.field({
    type: InvisibleTransaction,
    nullable: false,
    args: {
      data: t.arg({ type: InvisibleTransactionCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.invisibleTransaction.create({ data: args.data });
    },
  }),
);
