import { builder } from "src/builder";

import { InfiniteUndoWhereUnique } from "../../types/inputs/infiniteUndo/whereUnique";

builder.mutationField("infiniteUndoDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteUndoWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.infiniteUndo.delete({ where: args.where });
      return true;
    },
  }),
);
