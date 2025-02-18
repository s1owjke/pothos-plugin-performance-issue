import { builder } from "src/builder";

export const InfiniteUndoCreateMany = builder.inputRef<any>("InfiniteUndoCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
