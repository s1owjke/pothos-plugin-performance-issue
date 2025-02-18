import { builder } from "src/builder";

import { DimensionalBackupWhere } from "./where";

export const DimensionalBackupWhereRelationList = builder.inputRef<any>("DimensionalBackupWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: DimensionalBackupWhere, required: false }),
    every: t.field({ type: DimensionalBackupWhere, required: false }),
    none: t.field({ type: DimensionalBackupWhere, required: false }),
  }),
});
