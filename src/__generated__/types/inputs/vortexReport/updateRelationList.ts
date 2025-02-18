import { builder } from "src/builder";

import { VortexReportCreate } from "./create";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationList = builder.inputRef<any>("VortexReportUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [VortexReportWhereUnique] }),
    set: t.field({ type: [VortexReportWhereUnique] }),
    disconnect: t.field({ type: [VortexReportWhereUnique] }),
    create: t.field({ type: [VortexReportCreate] }),
  }),
});
