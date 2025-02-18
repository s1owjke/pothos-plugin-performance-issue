import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutCosmicDebris } from "../hypotheticalRevenue/updateRelationWithoutCosmicDebris";
import { ThresholdManifestUpdateRelationWithoutCosmicDebris } from "../thresholdManifest/updateRelationWithoutCosmicDebris";
import { UnstableFrequencyUpdateRelationWithoutCosmicDebrises } from "../unstableFrequency/updateRelationWithoutCosmicDebrises";

export const CosmicDebriUpdateWithoutVortexReport = builder.inputRef<any>("CosmicDebriUpdateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutCosmicDebris,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutCosmicDebris,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutCosmicDebrises,
      required: false,
    }),
  }),
});
