import { builder } from "src/builder";

import { ForbiddenCheeseburgerWhere } from "../../types/inputs/forbiddenCheeseburger/where";

builder.queryField("forbiddenCheeseburgerCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ForbiddenCheeseburgerWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.forbiddenCheeseburger.count({ where: args.where || undefined });
    },
  }),
);
