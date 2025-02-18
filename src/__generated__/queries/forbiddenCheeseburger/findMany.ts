import { builder } from "src/builder";

import { ForbiddenCheeseburgerOrderBy } from "../../types/inputs/forbiddenCheeseburger/orderBy";
import { ForbiddenCheeseburgerWhere } from "../../types/inputs/forbiddenCheeseburger/where";
import { ForbiddenCheeseburger } from "../../types/objects/forbiddenCheeseburger";

builder.queryField("forbiddenCheeseburgerList", (t) =>
  t.prismaField({
    type: [ForbiddenCheeseburger],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ForbiddenCheeseburgerWhere }),
      orderBy: t.arg({ type: [ForbiddenCheeseburgerOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.forbiddenCheeseburger.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
