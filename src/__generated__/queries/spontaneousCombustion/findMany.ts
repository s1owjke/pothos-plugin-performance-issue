import { builder } from "src/builder";

import { SpontaneousCombustionOrderBy } from "../../types/inputs/spontaneousCombustion/orderBy";
import { SpontaneousCombustionWhere } from "../../types/inputs/spontaneousCombustion/where";
import { SpontaneousCombustion } from "../../types/objects/spontaneousCombustion";

builder.queryField("spontaneousCombustionList", (t) =>
  t.prismaField({
    type: [SpontaneousCombustion],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SpontaneousCombustionWhere }),
      orderBy: t.arg({ type: [SpontaneousCombustionOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.spontaneousCombustion.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
