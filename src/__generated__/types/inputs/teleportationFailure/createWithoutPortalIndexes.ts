import { builder } from "src/builder";

import { SchrodingerUserCreateRelationWithoutTeleportationFailure } from "../schrodingerUser/createRelationWithoutTeleportationFailure";
import { SymphonyChartCreateRelationListWithoutTeleportationFailures } from "../symphonyChart/createRelationListWithoutTeleportationFailures";
import { ThresholdManifestCreateRelationListWithoutTeleportationFailures } from "../thresholdManifest/createRelationListWithoutTeleportationFailures";
import { VortexReportCreateRelationWithoutTeleportationFailures } from "../vortexReport/createRelationWithoutTeleportationFailures";

export const TeleportationFailureCreateWithoutPortalIndexes = builder.inputRef<any>("TeleportationFailureCreateWithoutPortalIndexes").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
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
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutTeleportationFailures,
      required: true,
    }),
  }),
});
