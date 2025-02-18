import { builder } from "src/builder";

import { RecursiveRecursionOrderBy } from "../../types/inputs/recursiveRecursion/orderBy";
import { RecursiveRecursionWhere } from "../../types/inputs/recursiveRecursion/where";
import { RecursiveRecursion } from "../../types/objects/recursiveRecursion";

builder.queryField("recursiveRecursionList", (t) =>
  t.prismaField({
    type: [RecursiveRecursion],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: RecursiveRecursionWhere }),
      orderBy: t.arg({ type: [RecursiveRecursionOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.recursiveRecursion.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
