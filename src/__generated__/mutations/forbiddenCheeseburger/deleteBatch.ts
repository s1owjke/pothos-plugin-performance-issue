import { builder } from "src/builder";

import { ForbiddenCheeseburgerWhereUnique } from "../../types/inputs/forbiddenCheeseburger/whereUnique";

builder.mutationField("forbiddenCheeseburgerDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ForbiddenCheeseburgerWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.forbiddenCheeseburger.delete({ where })));
      return true;
    },
  }),
);
