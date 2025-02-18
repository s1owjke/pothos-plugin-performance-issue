import { builder } from "src/builder";

import { DebuggingHistoryOrderBy } from "../../types/inputs/debuggingHistory/orderBy";
import { DebuggingHistoryWhere } from "../../types/inputs/debuggingHistory/where";
import { DebuggingHistory } from "../../types/objects/debuggingHistory";

builder.queryField("debuggingHistoryList", (t) =>
  t.prismaField({
    type: [DebuggingHistory],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: DebuggingHistoryWhere }),
      orderBy: t.arg({ type: [DebuggingHistoryOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.debuggingHistory.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
