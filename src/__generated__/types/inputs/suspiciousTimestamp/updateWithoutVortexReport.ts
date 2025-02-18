import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutSuspiciousTimestamp } from "../hypotheticalRevenue/updateRelationWithoutSuspiciousTimestamp";
import { ThresholdManifestUpdateRelationWithoutSuspiciousTimestamp } from "../thresholdManifest/updateRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampUpdateWithoutVortexReport = builder.inputRef<any>("SuspiciousTimestampUpdateWithoutVortexReport").implement({
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
  }),
});
