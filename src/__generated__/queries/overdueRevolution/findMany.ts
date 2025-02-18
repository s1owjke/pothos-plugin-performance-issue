import { builder } from "src/builder";

import { OverdueRevolutionOrderBy } from "../../types/inputs/overdueRevolution/orderBy";
import { OverdueRevolutionWhere } from "../../types/inputs/overdueRevolution/where";
import { OverdueRevolution } from "../../types/objects/overdueRevolution";

builder.queryField("overdueRevolutionList", (t) =>
  t.prismaField({
    type: [OverdueRevolution],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: OverdueRevolutionWhere }),
      orderBy: t.arg({ type: [OverdueRevolutionOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.overdueRevolution.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
