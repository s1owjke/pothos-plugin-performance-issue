import { builder } from "src/builder";

import { AlternativeFactCreateRelationListWithoutGlitchRegistry } from "../alternativeFact/createRelationListWithoutGlitchRegistry";
import { ConspiracyDraftCreateRelationListWithoutGlitchRegistry } from "../conspiracyDraft/createRelationListWithoutGlitchRegistry";
import { EchoChamberCreateRelationWithoutGlitchRegistries } from "../echoChamber/createRelationWithoutGlitchRegistries";
import { OverwrittenLegacyCreateRelationWithoutGlitchRegistries } from "../overwrittenLegacy/createRelationWithoutGlitchRegistries";
import { SingularityReportCreateRelationWithoutGlitchRegistry } from "../singularityReport/createRelationWithoutGlitchRegistry";
import { SymphonyChartCreateRelationWithoutGlitchRegistries } from "../symphonyChart/createRelationWithoutGlitchRegistries";
import { ThresholdManifestCreateRelationListWithoutGlitchRegisties } from "../thresholdManifest/createRelationListWithoutGlitchRegisties";

export const GlitchRegistryCreateWithoutPendingDisasters = builder.inputRef<any>("GlitchRegistryCreateWithoutPendingDisasters").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    alternativeFacts: t.field({
      type: AlternativeFactCreateRelationListWithoutGlitchRegistry,
      required: false,
    }),
    conspiracyDrafts: t.field({
      type: ConspiracyDraftCreateRelationListWithoutGlitchRegistry,
      required: false,
    }),
    echoChamber: t.field({
      type: EchoChamberCreateRelationWithoutGlitchRegistries,
      required: true,
    }),
    overwrittenLegacy: t.field({
      type: OverwrittenLegacyCreateRelationWithoutGlitchRegistries,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportCreateRelationWithoutGlitchRegistry,
      required: true,
    }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutGlitchRegistries,
      required: true,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestCreateRelationListWithoutGlitchRegisties,
      required: false,
    }),
  }),
});
