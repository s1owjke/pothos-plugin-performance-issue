import { builder } from "src/builder";

import { UnassignedDestinyWhere } from "./where";

export const UnassignedDestinyWhereRelationList = builder.inputRef<any>("UnassignedDestinyWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: UnassignedDestinyWhere, required: false }),
    every: t.field({ type: UnassignedDestinyWhere, required: false }),
    none: t.field({ type: UnassignedDestinyWhere, required: false }),
  }),
});
