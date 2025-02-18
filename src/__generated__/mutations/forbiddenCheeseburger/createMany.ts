import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreateMany } from "../../types/inputs/forbiddenCheeseburger/createMany";

builder.mutationField("forbiddenCheeseburgerCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ForbiddenCheeseburgerCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.forbiddenCheeseburger.createMany({ data: args.data });
      return count;
    },
  }),
);
