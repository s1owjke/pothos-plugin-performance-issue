import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutCosmicDebris } from "../hypotheticalRevenue/updateRelationWithoutCosmicDebris";
import { UnstableFrequencyUpdateRelationWithoutCosmicDebrises } from "../unstableFrequency/updateRelationWithoutCosmicDebrises";
import { VortexReportUpdateRelationWithoutCosmicDebris } from "../vortexReport/updateRelationWithoutCosmicDebris";

export const CosmicDebriUpdateWithoutThresholdManifest = builder.inputRef<any>("CosmicDebriUpdateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutCosmicDebris,
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
