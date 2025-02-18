import { builder } from "src/builder";

import { InfiniteUndoOrderBy } from "../../types/inputs/infiniteUndo/orderBy";
import { InfiniteUndoWhere } from "../../types/inputs/infiniteUndo/where";
import { InfiniteUndo } from "../../types/objects/infiniteUndo";

builder.queryField("infiniteUndoList", (t) =>
  t.prismaField({
    type: [InfiniteUndo],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: InfiniteUndoWhere }),
      orderBy: t.arg({ type: [InfiniteUndoOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.infiniteUndo.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
