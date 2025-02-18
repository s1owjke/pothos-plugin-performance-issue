import { builder } from "src/builder";

import { UnfinishedPrototypeOrderBy } from "../../types/inputs/unfinishedPrototype/orderBy";
import { UnfinishedPrototypeWhere } from "../../types/inputs/unfinishedPrototype/where";
import { UnfinishedPrototype } from "../../types/objects/unfinishedPrototype";

builder.queryField("unfinishedPrototypeList", (t) =>
  t.prismaField({
    type: [UnfinishedPrototype],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: UnfinishedPrototypeWhere }),
      orderBy: t.arg({ type: [UnfinishedPrototypeOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.unfinishedPrototype.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
