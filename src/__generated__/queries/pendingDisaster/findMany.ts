import { builder } from "src/builder";

import { PendingDisasterOrderBy } from "../../types/inputs/pendingDisaster/orderBy";
import { PendingDisasterWhere } from "../../types/inputs/pendingDisaster/where";
import { PendingDisaster } from "../../types/objects/pendingDisaster";

builder.queryField("pendingDisasterList", (t) =>
  t.prismaField({
    type: [PendingDisaster],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: PendingDisasterWhere }),
      orderBy: t.arg({ type: [PendingDisasterOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.pendingDisaster.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
