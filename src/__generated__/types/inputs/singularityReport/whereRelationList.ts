import { builder } from "src/builder";

import { SingularityReportWhere } from "./where";

export const SingularityReportWhereRelationList = builder.inputRef<any>("SingularityReportWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SingularityReportWhere, required: false }),
    every: t.field({ type: SingularityReportWhere, required: false }),
    none: t.field({ type: SingularityReportWhere, required: false }),
  }),
});
