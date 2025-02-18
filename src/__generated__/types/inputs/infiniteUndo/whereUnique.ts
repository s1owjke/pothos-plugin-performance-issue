import { builder } from "src/builder";

export const InfiniteUndoWhereUnique = builder.inputRef<any>("InfiniteUndoWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
