import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationWithoutConspiracyDrafts } from "../glitchRegistry/updateRelationWithoutConspiracyDrafts";
import { HypotheticalRevenueUpdateRelationWithoutConspiracyDrafts } from "../hypotheticalRevenue/updateRelationWithoutConspiracyDrafts";
import { ThresholdManifestUpdateRelationWithoutConspiracyDrafts } from "../thresholdManifest/updateRelationWithoutConspiracyDrafts";

export const ConspiracyDraftUpdateWithoutVortexReport = builder.inputRef<any>("ConspiracyDraftUpdateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    glitchRegistry: t.field({
      type: GlitchRegistryUpdateRelationWithoutConspiracyDrafts,
      required: false,
    }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutConspiracyDrafts,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutConspiracyDrafts,
      required: false,
    }),
  }),
});
