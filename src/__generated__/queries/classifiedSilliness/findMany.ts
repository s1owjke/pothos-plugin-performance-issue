import { builder } from "src/builder";

import { ClassifiedSillinessOrderBy } from "../../types/inputs/classifiedSilliness/orderBy";
import { ClassifiedSillinessWhere } from "../../types/inputs/classifiedSilliness/where";
import { ClassifiedSilliness } from "../../types/objects/classifiedSilliness";

builder.queryField("classifiedSillinessList", (t) =>
  t.prismaField({
    type: [ClassifiedSilliness],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ClassifiedSillinessWhere }),
      orderBy: t.arg({ type: [ClassifiedSillinessOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.classifiedSilliness.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
