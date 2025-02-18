import { builder } from "src/builder";

import { HalfBakedIdeaOrderBy } from "../../types/inputs/halfBakedIdea/orderBy";
import { HalfBakedIdeaWhere } from "../../types/inputs/halfBakedIdea/where";
import { HalfBakedIdea } from "../../types/objects/halfBakedIdea";

builder.queryField("halfBakedIdeaList", (t) =>
  t.prismaField({
    type: [HalfBakedIdea],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: HalfBakedIdeaWhere }),
      orderBy: t.arg({ type: [HalfBakedIdeaOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.halfBakedIdea.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
