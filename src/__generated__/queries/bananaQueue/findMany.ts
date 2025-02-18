import { builder } from "src/builder";

import { BananaQueueOrderBy } from "../../types/inputs/bananaQueue/orderBy";
import { BananaQueueWhere } from "../../types/inputs/bananaQueue/where";
import { BananaQueue } from "../../types/objects/bananaQueue";

builder.queryField("bananaQueueList", (t) =>
  t.prismaField({
    type: [BananaQueue],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: BananaQueueWhere }),
      orderBy: t.arg({ type: [BananaQueueOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.bananaQueue.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
