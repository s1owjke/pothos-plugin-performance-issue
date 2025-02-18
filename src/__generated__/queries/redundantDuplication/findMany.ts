import { builder } from "src/builder";

import { RedundantDuplicationOrderBy } from "../../types/inputs/redundantDuplication/orderBy";
import { RedundantDuplicationWhere } from "../../types/inputs/redundantDuplication/where";
import { RedundantDuplication } from "../../types/objects/redundantDuplication";

builder.queryField("redundantDuplicationList", (t) =>
  t.prismaField({
    type: [RedundantDuplication],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: RedundantDuplicationWhere }),
      orderBy: t.arg({ type: [RedundantDuplicationOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.redundantDuplication.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
