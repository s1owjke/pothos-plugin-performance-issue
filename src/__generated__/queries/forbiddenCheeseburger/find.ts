import { builder } from "src/builder";

import { ForbiddenCheeseburgerWhereUnique } from "../../types/inputs/forbiddenCheeseburger/whereUnique";
import { ForbiddenCheeseburger } from "../../types/objects/forbiddenCheeseburger";

builder.queryField("forbiddenCheeseburger", (t) =>
  t.prismaField({
    type: ForbiddenCheeseburger,
    nullable: true,
    args: {
      where: t.arg({ type: ForbiddenCheeseburgerWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.forbiddenCheeseburger.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
