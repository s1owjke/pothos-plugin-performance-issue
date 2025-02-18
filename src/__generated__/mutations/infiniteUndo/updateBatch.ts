import { builder } from "src/builder";

import { InfiniteUndoUpdate } from "../../types/inputs/infiniteUndo/update";
import { InfiniteUndoWhereUnique } from "../../types/inputs/infiniteUndo/whereUnique";
import { InfiniteUndo } from "../../types/objects/infiniteUndo";

builder.mutationField("infiniteUndoUpdateBatch", (t) =>
  t.field({
    type: [InfiniteUndo],
    nullable: false,
    args: {
      where: t.arg({ type: [InfiniteUndoWhereUnique], required: true }),
      data: t.arg({ type: [InfiniteUndoUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.infiniteUndo.update({ where, data });
        }),
      );
    },
  }),
);
