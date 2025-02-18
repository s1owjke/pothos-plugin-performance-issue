import { builder } from "src/builder";

import { HypotheticalRevenueWhere } from "../../types/inputs/hypotheticalRevenue/where";

builder.queryField("hypotheticalRevenueCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HypotheticalRevenueWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.hypotheticalRevenue.count({ where: args.where || undefined });
    },
  }),
);
