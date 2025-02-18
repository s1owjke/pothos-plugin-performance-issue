import { builder } from "src/builder";

import { ForbiddenCheeseburgerWhere } from "../../types/inputs/forbiddenCheeseburger/where";

builder.mutationField("forbiddenCheeseburgerDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ForbiddenCheeseburgerWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.forbiddenCheeseburger.deleteMany({ where: args.where });
      return count;
    },
  }),
);
