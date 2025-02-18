import { builder } from "src/builder";

import { BananaQueueWhere } from "./where";

export const BananaQueueWhereRelationList = builder.inputRef<any>("BananaQueueWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: BananaQueueWhere, required: false }),
    every: t.field({ type: BananaQueueWhere, required: false }),
    none: t.field({ type: BananaQueueWhere, required: false }),
  }),
});
