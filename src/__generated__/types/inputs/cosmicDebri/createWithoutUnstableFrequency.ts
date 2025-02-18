import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutCosmicDebris } from "../hypotheticalRevenue/createRelationWithoutCosmicDebris";
import { ThresholdManifestCreateRelationWithoutCosmicDebris } from "../thresholdManifest/createRelationWithoutCosmicDebris";
import { VortexReportCreateRelationWithoutCosmicDebris } from "../vortexReport/createRelationWithoutCosmicDebris";

export const CosmicDebriCreateWithoutUnstableFrequency = builder.inputRef<any>("CosmicDebriCreateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutCosmicDebris,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutCosmicDebris,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutCosmicDebris,
      required: false,
    }),
  }),
});
