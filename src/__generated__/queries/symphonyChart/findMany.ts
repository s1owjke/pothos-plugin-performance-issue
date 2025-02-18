import { builder } from "src/builder";

import { SymphonyChartOrderBy } from "../../types/inputs/symphonyChart/orderBy";
import { SymphonyChartWhere } from "../../types/inputs/symphonyChart/where";
import { SymphonyChart } from "../../types/objects/symphonyChart";

builder.queryField("symphonyChartList", (t) =>
  t.prismaField({
    type: [SymphonyChart],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SymphonyChartWhere }),
      orderBy: t.arg({ type: [SymphonyChartOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.symphonyChart.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
