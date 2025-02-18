import { builder } from "src/builder";

import { UnfinishedSymphonyWhere } from "./where";

export const UnfinishedSymphonyWhereRelationList = builder.inputRef<any>("UnfinishedSymphonyWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: UnfinishedSymphonyWhere, required: false }),
    every: t.field({ type: UnfinishedSymphonyWhere, required: false }),
    none: t.field({ type: UnfinishedSymphonyWhere, required: false }),
  }),
});
