import { builder } from "src/builder";

import { VortexReportCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutGhostRecord = builder.inputRef<any>("VortexReportCreateRelationListWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: [VortexReportWhereUnique] }),
    create: t.field({ type: [VortexReportCreateWithoutGhostRecord] }),
  }),
});
