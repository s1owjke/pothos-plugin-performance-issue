import { builder } from "src/builder";

import { InfiniteUndoWhere } from "./where";

export const InfiniteUndoWhereRelationList = builder.inputRef<any>("InfiniteUndoWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: InfiniteUndoWhere, required: false }),
    every: t.field({ type: InfiniteUndoWhere, required: false }),
    none: t.field({ type: InfiniteUndoWhere, required: false }),
  }),
});
