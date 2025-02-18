import { builder } from "src/builder";

import { InfiniteUndoCreate } from "../../types/inputs/infiniteUndo/create";
import { InfiniteUndo } from "../../types/objects/infiniteUndo";

builder.mutationField("infiniteUndoCreate", (t) =>
  t.field({
    type: InfiniteUndo,
    nullable: false,
    args: {
      data: t.arg({ type: InfiniteUndoCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.infiniteUndo.create({ data: args.data });
    },
  }),
);
