import { builder } from "src/builder";

import { GlitchRegistryCreateRelationWithoutConspiracyDrafts } from "../glitchRegistry/createRelationWithoutConspiracyDrafts";
import { HypotheticalRevenueCreateRelationWithoutConspiracyDrafts } from "../hypotheticalRevenue/createRelationWithoutConspiracyDrafts";
import { ThresholdManifestCreateRelationWithoutConspiracyDrafts } from "../thresholdManifest/createRelationWithoutConspiracyDrafts";

export const ConspiracyDraftCreateWithoutVortexReport = builder.inputRef<any>("ConspiracyDraftCreateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistry: t.field({
      type: GlitchRegistryCreateRelationWithoutConspiracyDrafts,
      required: false,
    }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutConspiracyDrafts,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutConspiracyDrafts,
      required: false,
    }),
  }),
});
