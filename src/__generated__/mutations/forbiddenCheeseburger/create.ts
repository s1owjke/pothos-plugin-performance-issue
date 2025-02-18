import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreate } from "../../types/inputs/forbiddenCheeseburger/create";
import { ForbiddenCheeseburger } from "../../types/objects/forbiddenCheeseburger";

builder.mutationField("forbiddenCheeseburgerCreate", (t) =>
  t.field({
    type: ForbiddenCheeseburger,
    nullable: false,
    args: {
      data: t.arg({ type: ForbiddenCheeseburgerCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.forbiddenCheeseburger.create({ data: args.data });
    },
  }),
);
