import { builder } from "src/builder";

import { MetaphysicalReceiptOrderBy } from "../../types/inputs/metaphysicalReceipt/orderBy";
import { MetaphysicalReceiptWhere } from "../../types/inputs/metaphysicalReceipt/where";
import { MetaphysicalReceipt } from "../../types/objects/metaphysicalReceipt";

builder.queryField("metaphysicalReceiptList", (t) =>
  t.prismaField({
    type: [MetaphysicalReceipt],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: MetaphysicalReceiptWhere }),
      orderBy: t.arg({ type: [MetaphysicalReceiptOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.metaphysicalReceipt.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
