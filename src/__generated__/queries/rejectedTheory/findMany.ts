import { builder } from "src/builder";

import { RejectedTheoryOrderBy } from "../../types/inputs/rejectedTheory/orderBy";
import { RejectedTheoryWhere } from "../../types/inputs/rejectedTheory/where";
import { RejectedTheory } from "../../types/objects/rejectedTheory";

builder.queryField("rejectedTheoryList", (t) =>
  t.prismaField({
    type: [RejectedTheory],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: RejectedTheoryWhere }),
      orderBy: t.arg({ type: [RejectedTheoryOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.rejectedTheory.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
