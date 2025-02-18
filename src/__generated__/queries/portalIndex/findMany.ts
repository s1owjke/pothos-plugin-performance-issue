import { builder } from "src/builder";

import { PortalIndexOrderBy } from "../../types/inputs/portalIndex/orderBy";
import { PortalIndexWhere } from "../../types/inputs/portalIndex/where";
import { PortalIndex } from "../../types/objects/portalIndex";

builder.queryField("portalIndexList", (t) =>
  t.prismaField({
    type: [PortalIndex],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: PortalIndexWhere }),
      orderBy: t.arg({ type: [PortalIndexOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.portalIndex.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
