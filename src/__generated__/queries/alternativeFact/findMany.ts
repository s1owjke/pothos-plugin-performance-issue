import { builder } from "src/builder";

import { AlternativeFactOrderBy } from "../../types/inputs/alternativeFact/orderBy";
import { AlternativeFactWhere } from "../../types/inputs/alternativeFact/where";
import { AlternativeFact } from "../../types/objects/alternativeFact";

builder.queryField("alternativeFactList", (t) =>
  t.prismaField({
    type: [AlternativeFact],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: AlternativeFactWhere }),
      orderBy: t.arg({ type: [AlternativeFactOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.alternativeFact.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
