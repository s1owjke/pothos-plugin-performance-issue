import { builder } from "src/builder";

import { GlitchRegistryCreateRelationWithoutConspiracyDrafts } from "../glitchRegistry/createRelationWithoutConspiracyDrafts";
import { ThresholdManifestCreateRelationWithoutConspiracyDrafts } from "../thresholdManifest/createRelationWithoutConspiracyDrafts";
import { VortexReportCreateRelationWithoutConspiracyDrafts } from "../vortexReport/createRelationWithoutConspiracyDrafts";

export const ConspiracyDraftCreateWithoutHypotheticalRevenue = builder.inputRef<any>("ConspiracyDraftCreateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistry: t.field({
      type: GlitchRegistryCreateRelationWithoutConspiracyDrafts,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutConspiracyDrafts,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutConspiracyDrafts,
      required: false,
    }),
  }),
});
