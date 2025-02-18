import { builder } from "src/builder";

import { ForbiddenCheeseburgerUpdateMany } from "../../types/inputs/forbiddenCheeseburger/updateMany";
import { ForbiddenCheeseburgerWhere } from "../../types/inputs/forbiddenCheeseburger/where";

builder.mutationField("forbiddenCheeseburgerUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ForbiddenCheeseburgerWhere, required: true }),
      data: t.arg({ type: ForbiddenCheeseburgerUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.forbiddenCheeseburger.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
