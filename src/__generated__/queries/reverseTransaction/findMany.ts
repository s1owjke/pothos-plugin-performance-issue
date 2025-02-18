import { builder } from "src/builder";

import { ReverseTransactionOrderBy } from "../../types/inputs/reverseTransaction/orderBy";
import { ReverseTransactionWhere } from "../../types/inputs/reverseTransaction/where";
import { ReverseTransaction } from "../../types/objects/reverseTransaction";

builder.queryField("reverseTransactionList", (t) =>
  t.prismaField({
    type: [ReverseTransaction],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ReverseTransactionWhere }),
      orderBy: t.arg({ type: [ReverseTransactionOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.reverseTransaction.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
