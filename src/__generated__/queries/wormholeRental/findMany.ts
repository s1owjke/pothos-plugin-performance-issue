import { builder } from "src/builder";

import { WormholeRentalOrderBy } from "../../types/inputs/wormholeRental/orderBy";
import { WormholeRentalWhere } from "../../types/inputs/wormholeRental/where";
import { WormholeRental } from "../../types/objects/wormholeRental";

builder.queryField("wormholeRentalList", (t) =>
  t.prismaField({
    type: [WormholeRental],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: WormholeRentalWhere }),
      orderBy: t.arg({ type: [WormholeRentalOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.wormholeRental.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
