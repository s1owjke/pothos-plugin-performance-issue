import { builder } from "src/builder";

import { SuspiciousTimestampWhere } from "./where";

export const SuspiciousTimestampWhereRelationList = builder.inputRef<any>("SuspiciousTimestampWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SuspiciousTimestampWhere, required: false }),
    every: t.field({ type: SuspiciousTimestampWhere, required: false }),
    none: t.field({ type: SuspiciousTimestampWhere, required: false }),
  }),
});
