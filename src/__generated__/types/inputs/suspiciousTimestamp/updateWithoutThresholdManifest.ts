import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutSuspiciousTimestamp } from "../hypotheticalRevenue/updateRelationWithoutSuspiciousTimestamp";
import { VortexReportUpdateRelationWithoutSuspiciousTimestamp } from "../vortexReport/updateRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampUpdateWithoutThresholdManifest = builder
  .inputRef<any>("SuspiciousTimestampUpdateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      hypotheticalRevenue: t.field({
        type: HypotheticalRevenueUpdateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportUpdateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
    }),
  });
