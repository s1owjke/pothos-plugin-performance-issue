import { builder } from "src/builder";

import { ReverseTransactionWhereUnique } from "../../types/inputs/reverseTransaction/whereUnique";
import { ReverseTransaction } from "../../types/objects/reverseTransaction";

builder.queryField("reverseTransaction", (t) =>
  t.prismaField({
    type: ReverseTransaction,
    nullable: true,
    args: {
      where: t.arg({ type: ReverseTransactionWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.reverseTransaction.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
