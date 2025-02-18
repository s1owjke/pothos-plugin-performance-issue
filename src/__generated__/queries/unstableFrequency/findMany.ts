import { builder } from "src/builder";

import { UnstableFrequencyOrderBy } from "../../types/inputs/unstableFrequency/orderBy";
import { UnstableFrequencyWhere } from "../../types/inputs/unstableFrequency/where";
import { UnstableFrequency } from "../../types/objects/unstableFrequency";

builder.queryField("unstableFrequencyList", (t) =>
  t.prismaField({
    type: [UnstableFrequency],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: UnstableFrequencyWhere }),
      orderBy: t.arg({ type: [UnstableFrequencyOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.unstableFrequency.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
