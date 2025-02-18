import { builder } from "src/builder";

import { InfiniteUndoWhereUnique } from "../../types/inputs/infiniteUndo/whereUnique";
import { InfiniteUndo } from "../../types/objects/infiniteUndo";

builder.queryField("infiniteUndo", (t) =>
  t.prismaField({
    type: InfiniteUndo,
    nullable: true,
    args: {
      where: t.arg({ type: InfiniteUndoWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.infiniteUndo.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
