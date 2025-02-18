import { builder } from "src/builder";

import { ThoughtCacheOrderBy } from "../../types/inputs/thoughtCache/orderBy";
import { ThoughtCacheWhere } from "../../types/inputs/thoughtCache/where";
import { ThoughtCache } from "../../types/objects/thoughtCache";

builder.queryField("thoughtCacheList", (t) =>
  t.prismaField({
    type: [ThoughtCache],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ThoughtCacheWhere }),
      orderBy: t.arg({ type: [ThoughtCacheOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.thoughtCache.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
