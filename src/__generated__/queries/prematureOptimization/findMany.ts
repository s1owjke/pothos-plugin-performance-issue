import { builder } from "src/builder";

import { PrematureOptimizationOrderBy } from "../../types/inputs/prematureOptimization/orderBy";
import { PrematureOptimizationWhere } from "../../types/inputs/prematureOptimization/where";
import { PrematureOptimization } from "../../types/objects/prematureOptimization";

builder.queryField("prematureOptimizationList", (t) =>
  t.prismaField({
    type: [PrematureOptimization],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: PrematureOptimizationWhere }),
      orderBy: t.arg({ type: [PrematureOptimizationOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.prematureOptimization.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
