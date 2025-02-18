import { builder } from "src/builder";

import { ForbiddenCheeseburgerWhereUnique } from "../../types/inputs/forbiddenCheeseburger/whereUnique";

builder.mutationField("forbiddenCheeseburgerDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ForbiddenCheeseburgerWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.forbiddenCheeseburger.delete({ where: args.where });
      return true;
    },
  }),
);
