import { builder } from "src/builder";

import { UnfinishedSymphonyOrderBy } from "../../types/inputs/unfinishedSymphony/orderBy";
import { UnfinishedSymphonyWhere } from "../../types/inputs/unfinishedSymphony/where";
import { UnfinishedSymphony } from "../../types/objects/unfinishedSymphony";

builder.queryField("unfinishedSymphonyList", (t) =>
  t.prismaField({
    type: [UnfinishedSymphony],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: UnfinishedSymphonyWhere }),
      orderBy: t.arg({ type: [UnfinishedSymphonyOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.unfinishedSymphony.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
