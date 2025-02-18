import { builder } from "src/builder";

import { ReverseTransactionCreate } from "../../types/inputs/reverseTransaction/create";
import { ReverseTransaction } from "../../types/objects/reverseTransaction";

builder.mutationField("reverseTransactionCreateBatch", (t) =>
  t.field({
    type: [ReverseTransaction],
    nullable: false,
    args: {
      data: t.arg({ type: [ReverseTransactionCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.reverseTransaction.create({ data })));
    },
  }),
);
