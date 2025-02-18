import { builder } from "src/builder";

import { PocketUniverseOrderBy } from "../../types/inputs/pocketUniverse/orderBy";
import { PocketUniverseWhere } from "../../types/inputs/pocketUniverse/where";
import { PocketUniverse } from "../../types/objects/pocketUniverse";

builder.queryField("pocketUniverseList", (t) =>
  t.prismaField({
    type: [PocketUniverse],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: PocketUniverseWhere }),
      orderBy: t.arg({ type: [PocketUniverseOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.pocketUniverse.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
