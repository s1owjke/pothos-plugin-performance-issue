import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutSuspiciousTimestamp } from "../hypotheticalRevenue/createRelationWithoutSuspiciousTimestamp";
import { ThresholdManifestCreateRelationWithoutSuspiciousTimestamp } from "../thresholdManifest/createRelationWithoutSuspiciousTimestamp";

export const SuspiciousTimestampCreateWithoutVortexReport = builder.inputRef<any>("SuspiciousTimestampCreateWithoutVortexReport").implement({
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
  }),
});
