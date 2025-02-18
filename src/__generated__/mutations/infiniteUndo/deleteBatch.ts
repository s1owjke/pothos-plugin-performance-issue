import { builder } from "src/builder";

import { InfiniteUndoWhereUnique } from "../../types/inputs/infiniteUndo/whereUnique";

builder.mutationField("infiniteUndoDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [InfiniteUndoWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.infiniteUndo.delete({ where })));
      return true;
    },
  }),
);
