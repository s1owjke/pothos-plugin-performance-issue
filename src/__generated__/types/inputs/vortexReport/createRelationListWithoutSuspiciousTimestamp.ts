import { builder } from "src/builder";

import { VortexReportCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutSuspiciousTimestamp = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutSuspiciousTimestamp] }),
    }),
  });
