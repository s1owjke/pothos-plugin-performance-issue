import { builder } from "src/builder";

import { RecursiveRecursionWhere } from "./where";

export const RecursiveRecursionWhereRelationList = builder.inputRef<any>("RecursiveRecursionWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: RecursiveRecursionWhere, required: false }),
    every: t.field({ type: RecursiveRecursionWhere, required: false }),
    none: t.field({ type: RecursiveRecursionWhere, required: false }),
  }),
});
