import { builder } from "src/builder";

import { AlternativeFactUpdateRelationListWithoutGlitchRegistry } from "../alternativeFact/updateRelationListWithoutGlitchRegistry";
import { ConspiracyDraftUpdateRelationListWithoutGlitchRegistry } from "../conspiracyDraft/updateRelationListWithoutGlitchRegistry";
import { EchoChamberUpdateRelationWithoutGlitchRegistries } from "../echoChamber/updateRelationWithoutGlitchRegistries";
import { OverwrittenLegacyUpdateRelationWithoutGlitchRegistries } from "../overwrittenLegacy/updateRelationWithoutGlitchRegistries";
import { PendingDisasterUpdateRelationListWithoutGlitchRegistry } from "../pendingDisaster/updateRelationListWithoutGlitchRegistry";
import { SingularityReportUpdateRelationWithoutGlitchRegistry } from "../singularityReport/updateRelationWithoutGlitchRegistry";
import { ThresholdManifestUpdateRelationListWithoutGlitchRegisties } from "../thresholdManifest/updateRelationListWithoutGlitchRegisties";

export const GlitchRegistryUpdateWithoutSymphonyChart = builder.inputRef<any>("GlitchRegistryUpdateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    alternativeFacts: t.field({
      type: AlternativeFactUpdateRelationListWithoutGlitchRegistry,
      required: false,
    }),
    conspiracyDrafts: t.field({
      type: ConspiracyDraftUpdateRelationListWithoutGlitchRegistry,
      required: false,
    }),
    echoChamber: t.field({
      type: EchoChamberUpdateRelationWithoutGlitchRegistries,
      required: false,
    }),
    overwrittenLegacy: t.field({
      type: OverwrittenLegacyUpdateRelationWithoutGlitchRegistries,
      required: false,
    }),
    pendingDisasters: t.field({
      type: PendingDisasterUpdateRelationListWithoutGlitchRegistry,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportUpdateRelationWithoutGlitchRegistry,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestUpdateRelationListWithoutGlitchRegisties,
      required: false,
    }),
  }),
});
