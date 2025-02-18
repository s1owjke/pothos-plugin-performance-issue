import { builder } from "src/builder";

import { SchrodingerUserWhere } from "./where";

export const SchrodingerUserWhereRelationList = builder.inputRef<any>("SchrodingerUserWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SchrodingerUserWhere, required: false }),
    every: t.field({ type: SchrodingerUserWhere, required: false }),
    none: t.field({ type: SchrodingerUserWhere, required: false }),
  }),
});
