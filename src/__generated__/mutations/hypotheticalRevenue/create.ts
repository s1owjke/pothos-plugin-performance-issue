import { builder } from "src/builder";

import { HypotheticalRevenueCreate } from "../../types/inputs/hypotheticalRevenue/create";
import { HypotheticalRevenue } from "../../types/objects/hypotheticalRevenue";

builder.mutationField("hypotheticalRevenueCreate", (t) =>
  t.field({
    type: HypotheticalRevenue,
    nullable: false,
    args: {
      data: t.arg({ type: HypotheticalRevenueCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.hypotheticalRevenue.create({ data: args.data });
    },
  }),
);
