import { builder } from "src/builder";

import { ClassifiedSillinessUpdateRelationListWithoutSymphonyChart } from "../classifiedSilliness/updateRelationListWithoutSymphonyChart";
import { EmotionalSupportTableUpdateRelationListWithoutSymphonyChart } from "../emotionalSupportTable/updateRelationListWithoutSymphonyChart";
import { GhostRecordUpdateRelationWithoutSymphonyChart } from "../ghostRecord/updateRelationWithoutSymphonyChart";
import { GlitchRegistryUpdateRelationListWithoutSymphonyChart } from "../glitchRegistry/updateRelationListWithoutSymphonyChart";
import { HalfBakedIdeaUpdateRelationListWithoutSymphonyChart } from "../halfBakedIdea/updateRelationListWithoutSymphonyChart";
import { SchrodingerUserUpdateRelationWithoutSymphonyChart } from "../schrodingerUser/updateRelationWithoutSymphonyChart";
import { TeleportationFailureUpdateRelationListWithoutSymphonyCharts } from "../teleportationFailure/updateRelationListWithoutSymphonyCharts";
import { ThoughtCacheUpdateRelationListWithoutSymphonyChart } from "../thoughtCache/updateRelationListWithoutSymphonyChart";
import { UnstableFrequencyUpdateRelationWithoutSymphonyCharts } from "../unstableFrequency/updateRelationWithoutSymphonyCharts";

export const SymphonyChartUpdateWithoutAlternativeFacts = builder.inputRef<any>("SymphonyChartUpdateWithoutAlternativeFacts").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    classifiedSillinesses: t.field({
      type: ClassifiedSillinessUpdateRelationListWithoutSymphonyChart,
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
