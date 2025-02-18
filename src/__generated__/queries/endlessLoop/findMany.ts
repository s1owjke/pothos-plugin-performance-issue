import { builder } from "src/builder";

import { EndlessLoopOrderBy } from "../../types/inputs/endlessLoop/orderBy";
import { EndlessLoopWhere } from "../../types/inputs/endlessLoop/where";
import { EndlessLoop } from "../../types/objects/endlessLoop";

builder.queryField("endlessLoopList", (t) =>
  t.prismaField({
    type: [EndlessLoop],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: EndlessLoopWhere }),
      orderBy: t.arg({ type: [EndlessLoopOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.endlessLoop.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
