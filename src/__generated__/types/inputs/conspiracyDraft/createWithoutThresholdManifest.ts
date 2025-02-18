import { builder } from "src/builder";

import { GlitchRegistryCreateRelationWithoutConspiracyDrafts } from "../glitchRegistry/createRelationWithoutConspiracyDrafts";
import { HypotheticalRevenueCreateRelationWithoutConspiracyDrafts } from "../hypotheticalRevenue/createRelationWithoutConspiracyDrafts";
import { VortexReportCreateRelationWithoutConspiracyDrafts } from "../vortexReport/createRelationWithoutConspiracyDrafts";

export const ConspiracyDraftCreateWithoutThresholdManifest = builder.inputRef<any>("ConspiracyDraftCreateWithoutThresholdManifest").implement({
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
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutConspiracyDrafts,
      required: false,
    }),
  }),
});
