import { builder } from "src/builder";

import { PortalIndexUpdateRelationListWithoutTeleportationFailures } from "../portalIndex/updateRelationListWithoutTeleportationFailures";
import { SchrodingerUserUpdateRelationWithoutTeleportationFailure } from "../schrodingerUser/updateRelationWithoutTeleportationFailure";
import { SymphonyChartUpdateRelationListWithoutTeleportationFailures } from "../symphonyChart/updateRelationListWithoutTeleportationFailures";
import { VortexReportUpdateRelationWithoutTeleportationFailures } from "../vortexReport/updateRelationWithoutTeleportationFailures";

export const TeleportationFailureUpdateWithoutThresholdManifests = builder
  .inputRef<any>("TeleportationFailureUpdateWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      portalIndexes: t.field({
        type: PortalIndexUpdateRelationListWithoutTeleportationFailures,
        required: false,
      }),
      schrodingerUser: t.field({
        type: SchrodingerUserUpdateRelationWithoutTeleportationFailure,
        required: false,
      }),
      symphonyCharts: t.field({
        type: SymphonyChartUpdateRelationListWithoutTeleportationFailures,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportUpdateRelationWithoutTeleportationFailures,
        required: false,
      }),
    }),
  });
