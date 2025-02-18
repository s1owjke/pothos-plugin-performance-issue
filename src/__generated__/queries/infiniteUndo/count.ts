import { builder } from "src/builder";

import { InfiniteUndoWhere } from "../../types/inputs/infiniteUndo/where";

builder.queryField("infiniteUndoCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteUndoWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.infiniteUndo.count({ where: args.where || undefined });
    },
  }),
);
