import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutCosmicDebris } from "../thresholdManifest/updateRelationWithoutCosmicDebris";
import { UnstableFrequencyUpdateRelationWithoutCosmicDebrises } from "../unstableFrequency/updateRelationWithoutCosmicDebrises";
import { VortexReportUpdateRelationWithoutCosmicDebris } from "../vortexReport/updateRelationWithoutCosmicDebris";

export const CosmicDebriUpdateWithoutHypotheticalRevenue = builder.inputRef<any>("CosmicDebriUpdateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutCosmicDebris,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutCosmicDebrises,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutCosmicDebris,
      required: false,
    }),
  }),
});
