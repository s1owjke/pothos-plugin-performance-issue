import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutSuspiciousTimestamp } from "../hypotheticalRevenue/updateRelationWithoutSuspiciousTimestamp";
import { ThresholdManifestUpdateRelationWithoutSuspiciousTimestamp } from "../thresholdManifest/updateRelationWithoutSuspiciousTimestamp";
import { VortexReportUpdateRelationWithoutSuspiciousTimestamp } from "../vortexReport/updateRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampUpdate = builder.inputRef<any>("SuspiciousTimestampUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutSuspiciousTimestamp,
      required: false,
    }),
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
