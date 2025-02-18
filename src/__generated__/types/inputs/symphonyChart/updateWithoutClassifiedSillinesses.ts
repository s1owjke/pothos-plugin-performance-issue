import { builder } from "src/builder";

import { AlternativeFactUpdateRelationListWithoutSymphonyChart } from "../alternativeFact/updateRelationListWithoutSymphonyChart";
import { EmotionalSupportTableUpdateRelationListWithoutSymphonyChart } from "../emotionalSupportTable/updateRelationListWithoutSymphonyChart";
import { GhostRecordUpdateRelationWithoutSymphonyChart } from "../ghostRecord/updateRelationWithoutSymphonyChart";
import { GlitchRegistryUpdateRelationListWithoutSymphonyChart } from "../glitchRegistry/updateRelationListWithoutSymphonyChart";
import { HalfBakedIdeaUpdateRelationListWithoutSymphonyChart } from "../halfBakedIdea/updateRelationListWithoutSymphonyChart";
import { SchrodingerUserUpdateRelationWithoutSymphonyChart } from "../schrodingerUser/updateRelationWithoutSymphonyChart";
import { TeleportationFailureUpdateRelationListWithoutSymphonyCharts } from "../teleportationFailure/updateRelationListWithoutSymphonyCharts";
import { ThoughtCacheUpdateRelationListWithoutSymphonyChart } from "../thoughtCache/updateRelationListWithoutSymphonyChart";
import { UnstableFrequencyUpdateRelationWithoutSymphonyCharts } from "../unstableFrequency/updateRelationWithoutSymphonyCharts";

export const SymphonyChartUpdateWithoutClassifiedSillinesses = builder.inputRef<any>("SymphonyChartUpdateWithoutClassifiedSillinesses").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    alternativeFacts: t.field({
      type: AlternativeFactUpdateRelationListWithoutSymphonyChart,
      required: false,
    }),
    emotionalSupportTables: t.field({
      type: EmotionalSupportTableUpdateRelationListWithoutSymphonyChart,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutSymphonyChart,
      required: false,
    }),
    glitchRegistries: t.field({
      type: GlitchRegistryUpdateRelationListWithoutSymphonyChart,
      required: false,
    }),
    halfBakedIdeas: t.field({
      type: HalfBakedIdeaUpdateRelationListWithoutSymphonyChart,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutSymphonyChart,
      required: false,
    }),
    teleportationFailures: t.field({
      type: TeleportationFailureUpdateRelationListWithoutSymphonyCharts,
      required: false,
    }),
    thoughtCaches: t.field({
      type: ThoughtCacheUpdateRelationListWithoutSymphonyChart,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutSymphonyCharts,
      required: false,
    }),
  }),
});
