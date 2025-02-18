import { builder } from "src/builder";

import { CosmicDebriOrderBy } from "../../types/inputs/cosmicDebri/orderBy";
import { CosmicDebriWhere } from "../../types/inputs/cosmicDebri/where";
import { CosmicDebri } from "../../types/objects/cosmicDebri";

builder.queryField("cosmicDebriList", (t) =>
  t.prismaField({
    type: [CosmicDebri],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: CosmicDebriWhere }),
      orderBy: t.arg({ type: [CosmicDebriOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.cosmicDebris.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
