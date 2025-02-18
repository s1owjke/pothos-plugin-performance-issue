import { builder } from "src/builder";

import { GloriousMistakeWhere } from "./where";

export const GloriousMistakeWhereRelationList = builder.inputRef<any>("GloriousMistakeWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: GloriousMistakeWhere, required: false }),
    every: t.field({ type: GloriousMistakeWhere, required: false }),
    none: t.field({ type: GloriousMistakeWhere, required: false }),
  }),
});
