import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutConspiracyDrafts } from "../hypotheticalRevenue/updateRelationWithoutConspiracyDrafts";
import { ThresholdManifestUpdateRelationWithoutConspiracyDrafts } from "../thresholdManifest/updateRelationWithoutConspiracyDrafts";
import { VortexReportUpdateRelationWithoutConspiracyDrafts } from "../vortexReport/updateRelationWithoutConspiracyDrafts";

export const ConspiracyDraftUpdateWithoutGlitchRegistry = builder.inputRef<any>("ConspiracyDraftUpdateWithoutGlitchRegistry").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
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
