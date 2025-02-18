import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutCosmicDebris } from "../thresholdManifest/createRelationWithoutCosmicDebris";
import { UnstableFrequencyCreateRelationWithoutCosmicDebrises } from "../unstableFrequency/createRelationWithoutCosmicDebrises";
import { VortexReportCreateRelationWithoutCosmicDebris } from "../vortexReport/createRelationWithoutCosmicDebris";

export const CosmicDebriCreateWithoutHypotheticalRevenue = builder.inputRef<any>("CosmicDebriCreateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutCosmicDebris,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutCosmicDebrises,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutCosmicDebris,
      required: false,
    }),
  }),
});
