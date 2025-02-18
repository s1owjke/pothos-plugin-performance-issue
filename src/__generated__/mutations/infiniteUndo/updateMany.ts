import { builder } from "src/builder";

import { InfiniteUndoUpdateMany } from "../../types/inputs/infiniteUndo/updateMany";
import { InfiniteUndoWhere } from "../../types/inputs/infiniteUndo/where";

builder.mutationField("infiniteUndoUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteUndoWhere, required: true }),
      data: t.arg({ type: InfiniteUndoUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.infiniteUndo.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
