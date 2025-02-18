import { builder } from "src/builder";

import { HypotheticalRevenueWhere } from "../../types/inputs/hypotheticalRevenue/where";

builder.mutationField("hypotheticalRevenueDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HypotheticalRevenueWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.hypotheticalRevenue.deleteMany({ where: args.where });
      return count;
    },
  }),
);
