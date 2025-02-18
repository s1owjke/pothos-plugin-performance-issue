import { builder } from "src/builder";

import { HypotheticalRevenueUpdate } from "../../types/inputs/hypotheticalRevenue/update";
import { HypotheticalRevenueWhereUnique } from "../../types/inputs/hypotheticalRevenue/whereUnique";
import { HypotheticalRevenue } from "../../types/objects/hypotheticalRevenue";

builder.mutationField("hypotheticalRevenueUpdate", (t) =>
  t.field({
    type: HypotheticalRevenue,
    nullable: false,
    args: {
      where: t.arg({ type: HypotheticalRevenueWhereUnique, required: true }),
      data: t.arg({ type: HypotheticalRevenueUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.hypotheticalRevenue.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
