import { builder } from "src/builder";

import { ParallelRealityOrderBy } from "../../types/inputs/parallelReality/orderBy";
import { ParallelRealityWhere } from "../../types/inputs/parallelReality/where";
import { ParallelReality } from "../../types/objects/parallelReality";

builder.queryField("parallelRealityList", (t) =>
  t.prismaField({
    type: [ParallelReality],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ParallelRealityWhere }),
      orderBy: t.arg({ type: [ParallelRealityOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.parallelReality.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
