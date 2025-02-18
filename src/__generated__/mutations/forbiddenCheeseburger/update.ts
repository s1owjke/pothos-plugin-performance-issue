import { builder } from "src/builder";

import { ForbiddenCheeseburgerUpdate } from "../../types/inputs/forbiddenCheeseburger/update";
import { ForbiddenCheeseburgerWhereUnique } from "../../types/inputs/forbiddenCheeseburger/whereUnique";
import { ForbiddenCheeseburger } from "../../types/objects/forbiddenCheeseburger";

builder.mutationField("forbiddenCheeseburgerUpdate", (t) =>
  t.field({
    type: ForbiddenCheeseburger,
    nullable: false,
    args: {
      where: t.arg({ type: ForbiddenCheeseburgerWhereUnique, required: true }),
      data: t.arg({ type: ForbiddenCheeseburgerUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.forbiddenCheeseburger.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
