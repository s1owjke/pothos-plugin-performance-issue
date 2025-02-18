import { builder } from "src/builder";

import { LostAndNeverFoundOrderBy } from "../../types/inputs/lostAndNeverFound/orderBy";
import { LostAndNeverFoundWhere } from "../../types/inputs/lostAndNeverFound/where";
import { LostAndNeverFound } from "../../types/objects/lostAndNeverFound";

builder.queryField("lostAndNeverFoundList", (t) =>
  t.prismaField({
    type: [LostAndNeverFound],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: LostAndNeverFoundWhere }),
      orderBy: t.arg({ type: [LostAndNeverFoundOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.lostAndNeverFound.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
