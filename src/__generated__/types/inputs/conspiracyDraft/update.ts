import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationWithoutConspiracyDrafts } from "../glitchRegistry/updateRelationWithoutConspiracyDrafts";
import { HypotheticalRevenueUpdateRelationWithoutConspiracyDrafts } from "../hypotheticalRevenue/updateRelationWithoutConspiracyDrafts";
import { ThresholdManifestUpdateRelationWithoutConspiracyDrafts } from "../thresholdManifest/updateRelationWithoutConspiracyDrafts";
import { VortexReportUpdateRelationWithoutConspiracyDrafts } from "../vortexReport/updateRelationWithoutConspiracyDrafts";

export const ConspiracyDraftUpdate = builder.inputRef<any>("ConspiracyDraftUpdate").implement({
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
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutConspiracyDrafts,
      required: false,
    }),
  }),
});
