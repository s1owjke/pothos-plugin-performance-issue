import { builder } from "src/builder";

import { HypotheticalRevenueWhereUnique } from "../../types/inputs/hypotheticalRevenue/whereUnique";
import { HypotheticalRevenue } from "../../types/objects/hypotheticalRevenue";

builder.queryField("hypotheticalRevenue", (t) =>
  t.prismaField({
    type: HypotheticalRevenue,
    nullable: true,
    args: {
      where: t.arg({ type: HypotheticalRevenueWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.hypotheticalRevenue.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
