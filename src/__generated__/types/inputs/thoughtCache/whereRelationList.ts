import { builder } from "src/builder";

import { ThoughtCacheWhere } from "./where";

export const ThoughtCacheWhereRelationList = builder.inputRef<any>("ThoughtCacheWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ThoughtCacheWhere, required: false }),
    every: t.field({ type: ThoughtCacheWhere, required: false }),
    none: t.field({ type: ThoughtCacheWhere, required: false }),
  }),
});
