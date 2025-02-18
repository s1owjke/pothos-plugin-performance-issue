import { builder } from "src/builder";

import { InfiniteUndoWhere } from "../../types/inputs/infiniteUndo/where";

builder.mutationField("infiniteUndoDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteUndoWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.infiniteUndo.deleteMany({ where: args.where });
      return count;
    },
  }),
);
