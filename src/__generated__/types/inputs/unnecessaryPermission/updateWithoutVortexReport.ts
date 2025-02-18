import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutUnnecessaryPermission } from "../hypotheticalRevenue/updateRelationWithoutUnnecessaryPermission";
import { ThresholdManifestUpdateRelationWithoutUnnecessaryPermission } from "../thresholdManifest/updateRelationWithoutUnnecessaryPermission";

export const UnnecessaryPermissionUpdateWithoutVortexReport = builder.inputRef<any>("UnnecessaryPermissionUpdateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutUnnecessaryPermission,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutUnnecessaryPermission,
      required: false,
    }),
  }),
});
