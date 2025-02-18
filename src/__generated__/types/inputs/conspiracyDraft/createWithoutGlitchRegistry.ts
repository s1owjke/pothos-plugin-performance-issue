import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutConspiracyDrafts } from "../hypotheticalRevenue/createRelationWithoutConspiracyDrafts";
import { ThresholdManifestCreateRelationWithoutConspiracyDrafts } from "../thresholdManifest/createRelationWithoutConspiracyDrafts";
import { VortexReportCreateRelationWithoutConspiracyDrafts } from "../vortexReport/createRelationWithoutConspiracyDrafts";

export const ConspiracyDraftCreateWithoutGlitchRegistry = builder.inputRef<any>("ConspiracyDraftCreateWithoutGlitchRegistry").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutConspiracyDrafts,
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
