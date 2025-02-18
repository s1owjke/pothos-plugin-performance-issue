import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutCosmicDebris } from "../hypotheticalRevenue/createRelationWithoutCosmicDebris";
import { ThresholdManifestCreateRelationWithoutCosmicDebris } from "../thresholdManifest/createRelationWithoutCosmicDebris";
import { UnstableFrequencyCreateRelationWithoutCosmicDebrises } from "../unstableFrequency/createRelationWithoutCosmicDebrises";

export const CosmicDebriCreateWithoutVortexReport = builder.inputRef<any>("CosmicDebriCreateWithoutVortexReport").implement({
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
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutCosmicDebrises,
      required: false,
    }),
  }),
});
