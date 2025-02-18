import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutUnnecessaryPermission } from "../hypotheticalRevenue/updateRelationWithoutUnnecessaryPermission";
import { VortexReportUpdateRelationWithoutUnnecessaryPermission } from "../vortexReport/updateRelationWithoutUnnecessaryPermission";

export const UnnecessaryPermissionUpdateWithoutThresholdManifest = builder
  .inputRef<any>("UnnecessaryPermissionUpdateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      hypotheticalRevenue: t.field({
        type: HypotheticalRevenueUpdateRelationWithoutUnnecessaryPermission,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportUpdateRelationWithoutUnnecessaryPermission,
        required: false,
      }),
    }),
  });
