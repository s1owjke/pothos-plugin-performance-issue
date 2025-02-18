import { builder } from "src/builder";

import { MissingContextOrderBy } from "../../types/inputs/missingContext/orderBy";
import { MissingContextWhere } from "../../types/inputs/missingContext/where";
import { MissingContext } from "../../types/objects/missingContext";

builder.queryField("missingContextList", (t) =>
  t.prismaField({
    type: [MissingContext],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: MissingContextWhere }),
      orderBy: t.arg({ type: [MissingContextOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.missingContext.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
