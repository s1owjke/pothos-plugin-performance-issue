import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutSuspiciousTimestamp } from "../thresholdManifest/updateRelationWithoutSuspiciousTimestamp";
import { VortexReportUpdateRelationWithoutSuspiciousTimestamp } from "../vortexReport/updateRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampUpdateWithoutHypotheticalRevenue = builder
  .inputRef<any>("SuspiciousTimestampUpdateWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      thresholdManifest: t.field({
        type: ThresholdManifestUpdateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportUpdateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
    }),
  });
