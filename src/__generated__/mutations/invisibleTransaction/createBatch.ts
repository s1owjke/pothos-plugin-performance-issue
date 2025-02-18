import { builder } from "src/builder";

import { InvisibleTransactionCreate } from "../../types/inputs/invisibleTransaction/create";
import { InvisibleTransaction } from "../../types/objects/invisibleTransaction";

builder.mutationField("invisibleTransactionCreateBatch", (t) =>
  t.field({
    type: [InvisibleTransaction],
    nullable: false,
    args: {
      data: t.arg({ type: [InvisibleTransactionCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.invisibleTransaction.create({ data })));
    },
  }),
);
