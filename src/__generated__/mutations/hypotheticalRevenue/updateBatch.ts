import { builder } from "src/builder";

import { HypotheticalRevenueUpdate } from "../../types/inputs/hypotheticalRevenue/update";
import { HypotheticalRevenueWhereUnique } from "../../types/inputs/hypotheticalRevenue/whereUnique";
import { HypotheticalRevenue } from "../../types/objects/hypotheticalRevenue";

builder.mutationField("hypotheticalRevenueUpdateBatch", (t) =>
  t.field({
    type: [HypotheticalRevenue],
    nullable: false,
    args: {
      where: t.arg({ type: [HypotheticalRevenueWhereUnique], required: true }),
      data: t.arg({ type: [HypotheticalRevenueUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.hypotheticalRevenue.update({ where, data });
        }),
      );
    },
  }),
);
