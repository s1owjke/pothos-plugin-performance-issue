import { builder } from "src/builder";

import { HypotheticalRevenueCreateMany } from "../../types/inputs/hypotheticalRevenue/createMany";

builder.mutationField("hypotheticalRevenueCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [HypotheticalRevenueCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.hypotheticalRevenue.createMany({ data: args.data });
      return count;
    },
  }),
);
