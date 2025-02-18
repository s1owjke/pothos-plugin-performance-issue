import { builder } from "src/builder";

import { InfiniteUndoCreate } from "../../types/inputs/infiniteUndo/create";
import { InfiniteUndo } from "../../types/objects/infiniteUndo";

builder.mutationField("infiniteUndoCreateBatch", (t) =>
  t.field({
    type: [InfiniteUndo],
    nullable: false,
    args: {
      data: t.arg({ type: [InfiniteUndoCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.infiniteUndo.create({ data })));
    },
  }),
);
