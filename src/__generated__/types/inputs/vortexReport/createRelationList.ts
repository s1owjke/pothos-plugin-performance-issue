import { builder } from "src/builder";

import { VortexReportCreate } from "./create";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationList = builder.inputRef<any>("VortexReportCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [VortexReportWhereUnique] }),
    create: t.field({ type: [VortexReportCreate] }),
  }),
});
