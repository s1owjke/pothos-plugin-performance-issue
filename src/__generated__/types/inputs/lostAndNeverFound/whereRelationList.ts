import { builder } from "src/builder";

import { LostAndNeverFoundWhere } from "./where";

export const LostAndNeverFoundWhereRelationList = builder.inputRef<any>("LostAndNeverFoundWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: LostAndNeverFoundWhere, required: false }),
    every: t.field({ type: LostAndNeverFoundWhere, required: false }),
    none: t.field({ type: LostAndNeverFoundWhere, required: false }),
  }),
});
