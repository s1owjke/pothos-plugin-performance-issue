import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutUnnecessaryPermission } from "../thresholdManifest/updateRelationWithoutUnnecessaryPermission";
import { VortexReportUpdateRelationWithoutUnnecessaryPermission } from "../vortexReport/updateRelationWithoutUnnecessaryPermission";

export const UnnecessaryPermissionUpdateWithoutHypotheticalRevenue = builder
  .inputRef<any>("UnnecessaryPermissionUpdateWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      thresholdManifest: t.field({
        type: ThresholdManifestUpdateRelationWithoutUnnecessaryPermission,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportUpdateRelationWithoutUnnecessaryPermission,
        required: false,
      }),
    }),
  });
