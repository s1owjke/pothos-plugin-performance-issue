import { builder } from "src/builder";

import { UnnecessaryPermissionWhere } from "./where";

export const UnnecessaryPermissionWhereRelationList = builder.inputRef<any>("UnnecessaryPermissionWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: UnnecessaryPermissionWhere, required: false }),
    every: t.field({ type: UnnecessaryPermissionWhere, required: false }),
    none: t.field({ type: UnnecessaryPermissionWhere, required: false }),
  }),
});
