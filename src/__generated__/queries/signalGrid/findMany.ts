import { builder } from "src/builder";

import { SignalGridOrderBy } from "../../types/inputs/signalGrid/orderBy";
import { SignalGridWhere } from "../../types/inputs/signalGrid/where";
import { SignalGrid } from "../../types/objects/signalGrid";

builder.queryField("signalGridList", (t) =>
  t.prismaField({
    type: [SignalGrid],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SignalGridWhere }),
      orderBy: t.arg({ type: [SignalGridOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.signalGrid.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
