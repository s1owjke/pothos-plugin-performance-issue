import { builder } from "src/builder";

import { PortalIndexCreateRelationListWithoutTeleportationFailures } from "../portalIndex/createRelationListWithoutTeleportationFailures";
import { SchrodingerUserCreateRelationWithoutTeleportationFailure } from "../schrodingerUser/createRelationWithoutTeleportationFailure";
import { ThresholdManifestCreateRelationListWithoutTeleportationFailures } from "../thresholdManifest/createRelationListWithoutTeleportationFailures";
import { VortexReportCreateRelationWithoutTeleportationFailures } from "../vortexReport/createRelationWithoutTeleportationFailures";

export const TeleportationFailureCreateWithoutSymphonyCharts = builder.inputRef<any>("TeleportationFailureCreateWithoutSymphonyCharts").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    portalIndexes: t.field({
      type: PortalIndexCreateRelationListWithoutTeleportationFailures,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutTeleportationFailure,
      required: true,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestCreateRelationListWithoutTeleportationFailures,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutTeleportationFailures,
      required: true,
    }),
  }),
});
