import { builder } from "src/builder";

import { InfiniteScrollLogOrderBy } from "../../types/inputs/infiniteScrollLog/orderBy";
import { InfiniteScrollLogWhere } from "../../types/inputs/infiniteScrollLog/where";
import { InfiniteScrollLog } from "../../types/objects/infiniteScrollLog";

builder.queryField("infiniteScrollLogList", (t) =>
  t.prismaField({
    type: [InfiniteScrollLog],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: InfiniteScrollLogWhere }),
      orderBy: t.arg({ type: [InfiniteScrollLogOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.infiniteScrollLog.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
