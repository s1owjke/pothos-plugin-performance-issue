import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutUnnecessaryPermission } from "../hypotheticalRevenue/createRelationWithoutUnnecessaryPermission";
import { ThresholdManifestCreateRelationWithoutUnnecessaryPermission } from "../thresholdManifest/createRelationWithoutUnnecessaryPermission";

export const UnnecessaryPermissionCreateWithoutVortexReport = builder.inputRef<any>("UnnecessaryPermissionCreateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutUnnecessaryPermission,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutUnnecessaryPermission,
      required: false,
    }),
  }),
});
