import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutUnnecessaryPermission } from "../hypotheticalRevenue/createRelationWithoutUnnecessaryPermission";
import { VortexReportCreateRelationWithoutUnnecessaryPermission } from "../vortexReport/createRelationWithoutUnnecessaryPermission";

export const UnnecessaryPermissionCreateWithoutThresholdManifest = builder
  .inputRef<any>("UnnecessaryPermissionCreateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      hypotheticalRevenue: t.field({
        type: HypotheticalRevenueCreateRelationWithoutUnnecessaryPermission,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportCreateRelationWithoutUnnecessaryPermission,
        required: false,
      }),
    }),
  });
