import { builder } from "src/builder";

import { VortexReportCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { VortexReportUpdateWithoutSuspiciousTimestamp } from "./updateWithoutSuspiciousTimestamp";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutSuspiciousTimestamp = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutSuspiciousTimestamp }),
      update: t.field({ type: VortexReportUpdateWithoutSuspiciousTimestamp }),
    }),
  });
