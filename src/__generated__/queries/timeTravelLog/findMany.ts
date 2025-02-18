import { builder } from "src/builder";

import { TimeTravelLogOrderBy } from "../../types/inputs/timeTravelLog/orderBy";
import { TimeTravelLogWhere } from "../../types/inputs/timeTravelLog/where";
import { TimeTravelLog } from "../../types/objects/timeTravelLog";

builder.queryField("timeTravelLogList", (t) =>
  t.prismaField({
    type: [TimeTravelLog],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: TimeTravelLogWhere }),
      orderBy: t.arg({ type: [TimeTravelLogOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.timeTravelLog.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
