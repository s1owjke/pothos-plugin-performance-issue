import { builder } from "src/builder";

import { GravityOverrideWhere } from "./where";

export const GravityOverrideWhereRelationList = builder.inputRef<any>("GravityOverrideWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: GravityOverrideWhere, required: false }),
    every: t.field({ type: GravityOverrideWhere, required: false }),
    none: t.field({ type: GravityOverrideWhere, required: false }),
  }),
});
