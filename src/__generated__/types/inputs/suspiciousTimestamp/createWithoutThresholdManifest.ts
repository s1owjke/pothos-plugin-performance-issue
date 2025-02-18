import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutSuspiciousTimestamp } from "../hypotheticalRevenue/createRelationWithoutSuspiciousTimestamp";
import { VortexReportCreateRelationWithoutSuspiciousTimestamp } from "../vortexReport/createRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampCreateWithoutThresholdManifest = builder
  .inputRef<any>("SuspiciousTimestampCreateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      hypotheticalRevenue: t.field({
        type: HypotheticalRevenueCreateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportCreateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
    }),
  });
