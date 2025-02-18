import { builder } from "src/builder";

import { AlternativeFactUpdateRelationListWithoutGlitchRegistry } from "../alternativeFact/updateRelationListWithoutGlitchRegistry";
import { ConspiracyDraftUpdateRelationListWithoutGlitchRegistry } from "../conspiracyDraft/updateRelationListWithoutGlitchRegistry";
import { OverwrittenLegacyUpdateRelationWithoutGlitchRegistries } from "../overwrittenLegacy/updateRelationWithoutGlitchRegistries";
import { PendingDisasterUpdateRelationListWithoutGlitchRegistry } from "../pendingDisaster/updateRelationListWithoutGlitchRegistry";
import { SingularityReportUpdateRelationWithoutGlitchRegistry } from "../singularityReport/updateRelationWithoutGlitchRegistry";
import { SymphonyChartUpdateRelationWithoutGlitchRegistries } from "../symphonyChart/updateRelationWithoutGlitchRegistries";
import { ThresholdManifestUpdateRelationListWithoutGlitchRegisties } from "../thresholdManifest/updateRelationListWithoutGlitchRegisties";

export const GlitchRegistryUpdateWithoutEchoChamber = builder.inputRef<any>("GlitchRegistryUpdateWithoutEchoChamber").implement({
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
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutGlitchRegistries,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestUpdateRelationListWithoutGlitchRegisties,
      required: false,
    }),
  }),
});
