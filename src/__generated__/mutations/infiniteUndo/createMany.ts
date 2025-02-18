import { builder } from "src/builder";

import { InfiniteUndoCreateMany } from "../../types/inputs/infiniteUndo/createMany";

builder.mutationField("infiniteUndoCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [InfiniteUndoCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.infiniteUndo.createMany({ data: args.data });
      return count;
    },
  }),
);
