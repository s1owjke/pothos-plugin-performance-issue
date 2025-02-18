import { builder } from "src/builder";

import { InvisibleTransactionOrderBy } from "../../types/inputs/invisibleTransaction/orderBy";
import { InvisibleTransactionWhere } from "../../types/inputs/invisibleTransaction/where";
import { InvisibleTransaction } from "../../types/objects/invisibleTransaction";

builder.queryField("invisibleTransactionList", (t) =>
  t.prismaField({
    type: [InvisibleTransaction],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: InvisibleTransactionWhere }),
      orderBy: t.arg({ type: [InvisibleTransactionOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.invisibleTransaction.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
