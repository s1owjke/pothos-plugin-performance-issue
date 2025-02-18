import { builder } from "src/builder";

import { ForbiddenCheeseburgerUpdate } from "../../types/inputs/forbiddenCheeseburger/update";
import { ForbiddenCheeseburgerWhereUnique } from "../../types/inputs/forbiddenCheeseburger/whereUnique";
import { ForbiddenCheeseburger } from "../../types/objects/forbiddenCheeseburger";

builder.mutationField("forbiddenCheeseburgerUpdateBatch", (t) =>
  t.field({
    type: [ForbiddenCheeseburger],
    nullable: false,
    args: {
      where: t.arg({ type: [ForbiddenCheeseburgerWhereUnique], required: true }),
      data: t.arg({ type: [ForbiddenCheeseburgerUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.forbiddenCheeseburger.update({ where, data });
        }),
      );
    },
  }),
);
