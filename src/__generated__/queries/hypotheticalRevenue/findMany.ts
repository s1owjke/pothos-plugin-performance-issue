import { builder } from "src/builder";

import { HypotheticalRevenueOrderBy } from "../../types/inputs/hypotheticalRevenue/orderBy";
import { HypotheticalRevenueWhere } from "../../types/inputs/hypotheticalRevenue/where";
import { HypotheticalRevenue } from "../../types/objects/hypotheticalRevenue";

builder.queryField("hypotheticalRevenueList", (t) =>
  t.prismaField({
    type: [HypotheticalRevenue],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: HypotheticalRevenueWhere }),
      orderBy: t.arg({ type: [HypotheticalRevenueOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.hypotheticalRevenue.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
