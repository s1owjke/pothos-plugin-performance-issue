import { builder } from "src/builder";

import { SingularityReportCreate } from "./create";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationList = builder.inputRef<any>("SingularityReportUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SingularityReportWhereUnique] }),
    set: t.field({ type: [SingularityReportWhereUnique] }),
    disconnect: t.field({ type: [SingularityReportWhereUnique] }),
    create: t.field({ type: [SingularityReportCreate] }),
  }),
});
