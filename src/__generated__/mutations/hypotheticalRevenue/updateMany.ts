import { builder } from "src/builder";

import { HypotheticalRevenueUpdateMany } from "../../types/inputs/hypotheticalRevenue/updateMany";
import { HypotheticalRevenueWhere } from "../../types/inputs/hypotheticalRevenue/where";

builder.mutationField("hypotheticalRevenueUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HypotheticalRevenueWhere, required: true }),
      data: t.arg({ type: HypotheticalRevenueUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.hypotheticalRevenue.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
