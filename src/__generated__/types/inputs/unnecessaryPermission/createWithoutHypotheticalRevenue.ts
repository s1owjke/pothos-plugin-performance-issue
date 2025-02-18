import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutUnnecessaryPermission } from "../thresholdManifest/createRelationWithoutUnnecessaryPermission";
import { VortexReportCreateRelationWithoutUnnecessaryPermission } from "../vortexReport/createRelationWithoutUnnecessaryPermission";

export const UnnecessaryPermissionCreateWithoutHypotheticalRevenue = builder
  .inputRef<any>("UnnecessaryPermissionCreateWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
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
