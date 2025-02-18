import { builder } from "src/builder";

import { VortexReportCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutSuspiciousTimestamp = builder
  .inputRef<any>("VortexReportCreateRelationWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutSuspiciousTimestamp }),
    }),
  });
