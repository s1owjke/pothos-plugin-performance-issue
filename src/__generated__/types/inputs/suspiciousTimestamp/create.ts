import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutSuspiciousTimestamp } from "../hypotheticalRevenue/createRelationWithoutSuspiciousTimestamp";
import { ThresholdManifestCreateRelationWithoutSuspiciousTimestamp } from "../thresholdManifest/createRelationWithoutSuspiciousTimestamp";
import { VortexReportCreateRelationWithoutSuspiciousTimestamp } from "../vortexReport/createRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampCreate = builder.inputRef<any>("SuspiciousTimestampCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutSuspiciousTimestamp,
      required: false,
    }),
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
