import { builder } from "src/builder";

import { InfiniteUndoUpdate } from "../../types/inputs/infiniteUndo/update";
import { InfiniteUndoWhereUnique } from "../../types/inputs/infiniteUndo/whereUnique";
import { InfiniteUndo } from "../../types/objects/infiniteUndo";

builder.mutationField("infiniteUndoUpdate", (t) =>
  t.field({
    type: InfiniteUndo,
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteUndoWhereUnique, required: true }),
      data: t.arg({ type: InfiniteUndoUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.infiniteUndo.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
