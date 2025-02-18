import { builder } from "src/builder";

import { InvisibleTransactionWhereUnique } from "../../types/inputs/invisibleTransaction/whereUnique";
import { InvisibleTransaction } from "../../types/objects/invisibleTransaction";

builder.queryField("invisibleTransaction", (t) =>
  t.prismaField({
    type: InvisibleTransaction,
    nullable: true,
    args: {
      where: t.arg({ type: InvisibleTransactionWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.invisibleTransaction.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
