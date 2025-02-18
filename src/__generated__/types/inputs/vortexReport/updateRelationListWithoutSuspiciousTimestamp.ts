import { builder } from "src/builder";

import { VortexReportCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutSuspiciousTimestamp = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutSuspiciousTimestamp] }),
    }),
  });
