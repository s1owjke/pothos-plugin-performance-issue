import { builder } from "src/builder";

import { VortexReportCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutGhostRecord = builder.inputRef<any>("VortexReportUpdateRelationListWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: [VortexReportWhereUnique] }),
    set: t.field({ type: [VortexReportWhereUnique] }),
    disconnect: t.field({ type: [VortexReportWhereUnique] }),
    create: t.field({ type: [VortexReportCreateWithoutGhostRecord] }),
  }),
});
