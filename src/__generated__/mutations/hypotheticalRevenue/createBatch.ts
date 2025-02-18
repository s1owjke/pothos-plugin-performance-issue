import { builder } from "src/builder";

import { HypotheticalRevenueCreate } from "../../types/inputs/hypotheticalRevenue/create";
import { HypotheticalRevenue } from "../../types/objects/hypotheticalRevenue";

builder.mutationField("hypotheticalRevenueCreateBatch", (t) =>
  t.field({
    type: [HypotheticalRevenue],
    nullable: false,
    args: {
      data: t.arg({ type: [HypotheticalRevenueCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.hypotheticalRevenue.create({ data })));
    },
  }),
);
