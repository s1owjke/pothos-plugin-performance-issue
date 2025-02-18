import { builder } from "src/builder";

import { GhostRecordWhere } from "./where";

export const GhostRecordWhereRelationList = builder.inputRef<any>("GhostRecordWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: GhostRecordWhere, required: false }),
    every: t.field({ type: GhostRecordWhere, required: false }),
    none: t.field({ type: GhostRecordWhere, required: false }),
  }),
});
