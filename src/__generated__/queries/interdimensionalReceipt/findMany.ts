import { builder } from "src/builder";

import { InterdimensionalReceiptOrderBy } from "../../types/inputs/interdimensionalReceipt/orderBy";
import { InterdimensionalReceiptWhere } from "../../types/inputs/interdimensionalReceipt/where";
import { InterdimensionalReceipt } from "../../types/objects/interdimensionalReceipt";

builder.queryField("interdimensionalReceiptList", (t) =>
  t.prismaField({
    type: [InterdimensionalReceipt],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: InterdimensionalReceiptWhere }),
      orderBy: t.arg({ type: [InterdimensionalReceiptOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.interdimensionalReceipt.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
