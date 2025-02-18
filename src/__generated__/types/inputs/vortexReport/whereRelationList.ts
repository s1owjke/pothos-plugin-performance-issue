import { builder } from "src/builder";

import { VortexReportWhere } from "./where";

export const VortexReportWhereRelationList = builder.inputRef<any>("VortexReportWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: VortexReportWhere, required: false }),
    every: t.field({ type: VortexReportWhere, required: false }),
    none: t.field({ type: VortexReportWhere, required: false }),
  }),
});
