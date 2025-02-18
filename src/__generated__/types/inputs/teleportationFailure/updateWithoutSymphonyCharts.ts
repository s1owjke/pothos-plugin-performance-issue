import { builder } from "src/builder";

import { PortalIndexUpdateRelationListWithoutTeleportationFailures } from "../portalIndex/updateRelationListWithoutTeleportationFailures";
import { SchrodingerUserUpdateRelationWithoutTeleportationFailure } from "../schrodingerUser/updateRelationWithoutTeleportationFailure";
import { ThresholdManifestUpdateRelationListWithoutTeleportationFailures } from "../thresholdManifest/updateRelationListWithoutTeleportationFailures";
import { VortexReportUpdateRelationWithoutTeleportationFailures } from "../vortexReport/updateRelationWithoutTeleportationFailures";

export const TeleportationFailureUpdateWithoutSymphonyCharts = builder.inputRef<any>("TeleportationFailureUpdateWithoutSymphonyCharts").implement({
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
    thresholdManifests: t.field({
      type: ThresholdManifestUpdateRelationListWithoutTeleportationFailures,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutTeleportationFailures,
      required: false,
    }),
  }),
});
