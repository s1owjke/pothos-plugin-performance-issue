import { builder } from "src/builder";

import { EndlessLoopWhere } from "./where";

export const EndlessLoopWhereRelationList = builder.inputRef<any>("EndlessLoopWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: EndlessLoopWhere, required: false }),
    every: t.field({ type: EndlessLoopWhere, required: false }),
    none: t.field({ type: EndlessLoopWhere, required: false }),
  }),
});
