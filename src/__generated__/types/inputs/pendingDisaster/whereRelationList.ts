import { builder } from "src/builder";

import { PendingDisasterWhere } from "./where";

export const PendingDisasterWhereRelationList = builder.inputRef<any>("PendingDisasterWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: PendingDisasterWhere, required: false }),
    every: t.field({ type: PendingDisasterWhere, required: false }),
    none: t.field({ type: PendingDisasterWhere, required: false }),
  }),
});
