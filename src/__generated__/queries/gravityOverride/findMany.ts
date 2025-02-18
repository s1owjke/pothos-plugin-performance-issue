import { builder } from "src/builder";

import { GravityOverrideOrderBy } from "../../types/inputs/gravityOverride/orderBy";
import { GravityOverrideWhere } from "../../types/inputs/gravityOverride/where";
import { GravityOverride } from "../../types/objects/gravityOverride";

builder.queryField("gravityOverrideList", (t) =>
  t.prismaField({
    type: [GravityOverride],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: GravityOverrideWhere }),
      orderBy: t.arg({ type: [GravityOverrideOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.gravityOverride.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
