import { builder } from "src/builder";

import { ReverseTransactionCreate } from "../../types/inputs/reverseTransaction/create";
import { ReverseTransaction } from "../../types/objects/reverseTransaction";

builder.mutationField("reverseTransactionCreate", (t) =>
  t.field({
    type: ReverseTransaction,
    nullable: false,
    args: {
      data: t.arg({ type: ReverseTransactionCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.reverseTransaction.create({ data: args.data });
    },
  }),
);
