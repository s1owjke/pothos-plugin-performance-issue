import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutUnnecessaryPermission } from "../hypotheticalRevenue/createRelationWithoutUnnecessaryPermission";
import { ThresholdManifestCreateRelationWithoutUnnecessaryPermission } from "../thresholdManifest/createRelationWithoutUnnecessaryPermission";
import { VortexReportCreateRelationWithoutUnnecessaryPermission } from "../vortexReport/createRelationWithoutUnnecessaryPermission";

export const UnnecessaryPermissionCreate = builder.inputRef<any>("UnnecessaryPermissionCreate").implement({
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
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutUnnecessaryPermission,
      required: false,
    }),
  }),
});
