import { builder } from "src/builder";

import { HypotheticalRevenueWhereUnique } from "../../types/inputs/hypotheticalRevenue/whereUnique";

builder.mutationField("hypotheticalRevenueDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [HypotheticalRevenueWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.hypotheticalRevenue.delete({ where })));
      return true;
    },
  }),
);
