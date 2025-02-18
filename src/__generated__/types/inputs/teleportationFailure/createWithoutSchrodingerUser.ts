import { builder } from "src/builder";

import { PortalIndexCreateRelationListWithoutTeleportationFailures } from "../portalIndex/createRelationListWithoutTeleportationFailures";
import { SymphonyChartCreateRelationListWithoutTeleportationFailures } from "../symphonyChart/createRelationListWithoutTeleportationFailures";
import { ThresholdManifestCreateRelationListWithoutTeleportationFailures } from "../thresholdManifest/createRelationListWithoutTeleportationFailures";
import { VortexReportCreateRelationWithoutTeleportationFailures } from "../vortexReport/createRelationWithoutTeleportationFailures";

export const TeleportationFailureCreateWithoutSchrodingerUser = builder.inputRef<any>("TeleportationFailureCreateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    portalIndexes: t.field({
      type: PortalIndexCreateRelationListWithoutTeleportationFailures,
      required: false,
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
