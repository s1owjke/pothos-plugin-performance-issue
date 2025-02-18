import { builder } from "src/builder";

import { PortalIndexUpdateRelationListWithoutTeleportationFailures } from "../portalIndex/updateRelationListWithoutTeleportationFailures";
import { SymphonyChartUpdateRelationListWithoutTeleportationFailures } from "../symphonyChart/updateRelationListWithoutTeleportationFailures";
import { ThresholdManifestUpdateRelationListWithoutTeleportationFailures } from "../thresholdManifest/updateRelationListWithoutTeleportationFailures";
import { VortexReportUpdateRelationWithoutTeleportationFailures } from "../vortexReport/updateRelationWithoutTeleportationFailures";

export const TeleportationFailureUpdateWithoutSchrodingerUser = builder.inputRef<any>("TeleportationFailureUpdateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    portalIndexes: t.field({
      type: PortalIndexUpdateRelationListWithoutTeleportationFailures,
      required: false,
    }),
    symphonyCharts: t.field({
      type: SymphonyChartUpdateRelationListWithoutTeleportationFailures,
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
