import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutSuspiciousTimestamp } from "../thresholdManifest/createRelationWithoutSuspiciousTimestamp";
import { VortexReportCreateRelationWithoutSuspiciousTimestamp } from "../vortexReport/createRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampCreateWithoutHypotheticalRevenue = builder
  .inputRef<any>("SuspiciousTimestampCreateWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      thresholdManifest: t.field({
        type: ThresholdManifestCreateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportCreateRelationWithoutSuspiciousTimestamp,
        required: false,
      }),
    }),
  });
