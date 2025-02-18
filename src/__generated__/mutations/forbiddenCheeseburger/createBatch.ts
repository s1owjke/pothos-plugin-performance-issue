import { builder } from "src/builder";

import { ForbiddenCheeseburgerCreate } from "../../types/inputs/forbiddenCheeseburger/create";
import { ForbiddenCheeseburger } from "../../types/objects/forbiddenCheeseburger";

builder.mutationField("forbiddenCheeseburgerCreateBatch", (t) =>
  t.field({
    type: [ForbiddenCheeseburger],
    nullable: false,
    args: {
      data: t.arg({ type: [ForbiddenCheeseburgerCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.forbiddenCheeseburger.create({ data })));
    },
  }),
);
