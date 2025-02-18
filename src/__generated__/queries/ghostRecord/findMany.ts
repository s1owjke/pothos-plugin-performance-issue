import { builder } from "src/builder";

import { GhostRecordOrderBy } from "../../types/inputs/ghostRecord/orderBy";
import { GhostRecordWhere } from "../../types/inputs/ghostRecord/where";
import { GhostRecord } from "../../types/objects/ghostRecord";

builder.queryField("ghostRecordList", (t) =>
  t.prismaField({
    type: [GhostRecord],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: GhostRecordWhere }),
      orderBy: t.arg({ type: [GhostRecordOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.ghostRecord.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
