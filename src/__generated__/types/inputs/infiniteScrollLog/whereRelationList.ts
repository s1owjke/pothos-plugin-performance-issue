import { builder } from "src/builder";

import { InfiniteScrollLogWhere } from "./where";

export const InfiniteScrollLogWhereRelationList = builder.inputRef<any>("InfiniteScrollLogWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: InfiniteScrollLogWhere, required: false }),
    every: t.field({ type: InfiniteScrollLogWhere, required: false }),
    none: t.field({ type: InfiniteScrollLogWhere, required: false }),
  }),
});
