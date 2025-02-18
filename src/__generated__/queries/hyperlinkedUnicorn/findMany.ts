import { builder } from "src/builder";

import { HyperlinkedUnicornOrderBy } from "../../types/inputs/hyperlinkedUnicorn/orderBy";
import { HyperlinkedUnicornWhere } from "../../types/inputs/hyperlinkedUnicorn/where";
import { HyperlinkedUnicorn } from "../../types/objects/hyperlinkedUnicorn";

builder.queryField("hyperlinkedUnicornList", (t) =>
  t.prismaField({
    type: [HyperlinkedUnicorn],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: HyperlinkedUnicornWhere }),
      orderBy: t.arg({ type: [HyperlinkedUnicornOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.hyperlinkedUnicorn.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
