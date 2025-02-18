import { builder } from "src/builder";

import { HypotheticalRevenueWhereUnique } from "../../types/inputs/hypotheticalRevenue/whereUnique";

builder.mutationField("hypotheticalRevenueDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: HypotheticalRevenueWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.hypotheticalRevenue.delete({ where: args.where });
      return true;
    },
  }),
);
