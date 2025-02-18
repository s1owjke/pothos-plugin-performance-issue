import { builder } from "src/builder";

import { UnfinishedPrototypeWhere } from "./where";

export const UnfinishedPrototypeWhereRelationList = builder.inputRef<any>("UnfinishedPrototypeWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: UnfinishedPrototypeWhere, required: false }),
    every: t.field({ type: UnfinishedPrototypeWhere, required: false }),
    none: t.field({ type: UnfinishedPrototypeWhere, required: false }),
  }),
});
