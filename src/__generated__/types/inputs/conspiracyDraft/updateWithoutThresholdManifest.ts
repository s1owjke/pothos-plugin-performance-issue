import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationWithoutConspiracyDrafts } from "../glitchRegistry/updateRelationWithoutConspiracyDrafts";
import { HypotheticalRevenueUpdateRelationWithoutConspiracyDrafts } from "../hypotheticalRevenue/updateRelationWithoutConspiracyDrafts";
import { VortexReportUpdateRelationWithoutConspiracyDrafts } from "../vortexReport/updateRelationWithoutConspiracyDrafts";

export const ConspiracyDraftUpdateWithoutThresholdManifest = builder.inputRef<any>("ConspiracyDraftUpdateWithoutThresholdManifest").implement({
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
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutConspiracyDrafts,
      required: false,
    }),
  }),
});
