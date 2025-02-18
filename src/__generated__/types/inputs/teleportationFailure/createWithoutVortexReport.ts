import { builder } from "src/builder";

import { PortalIndexCreateRelationListWithoutTeleportationFailures } from "../portalIndex/createRelationListWithoutTeleportationFailures";
import { SchrodingerUserCreateRelationWithoutTeleportationFailure } from "../schrodingerUser/createRelationWithoutTeleportationFailure";
import { SymphonyChartCreateRelationListWithoutTeleportationFailures } from "../symphonyChart/createRelationListWithoutTeleportationFailures";
import { ThresholdManifestCreateRelationListWithoutTeleportationFailures } from "../thresholdManifest/createRelationListWithoutTeleportationFailures";

export const TeleportationFailureCreateWithoutVortexReport = builder.inputRef<any>("TeleportationFailureCreateWithoutVortexReport").implement({
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
    symphonyCharts: t.field({
      type: SymphonyChartCreateRelationListWithoutTeleportationFailures,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestCreateRelationListWithoutTeleportationFailures,
      required: false,
    }),
  }),
});
