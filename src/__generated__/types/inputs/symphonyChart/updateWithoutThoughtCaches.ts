import { builder } from "src/builder";

import { AlternativeFactUpdateRelationListWithoutSymphonyChart } from "../alternativeFact/updateRelationListWithoutSymphonyChart";
import { ClassifiedSillinessUpdateRelationListWithoutSymphonyChart } from "../classifiedSilliness/updateRelationListWithoutSymphonyChart";
import { EmotionalSupportTableUpdateRelationListWithoutSymphonyChart } from "../emotionalSupportTable/updateRelationListWithoutSymphonyChart";
import { GhostRecordUpdateRelationWithoutSymphonyChart } from "../ghostRecord/updateRelationWithoutSymphonyChart";
import { GlitchRegistryUpdateRelationListWithoutSymphonyChart } from "../glitchRegistry/updateRelationListWithoutSymphonyChart";
import { HalfBakedIdeaUpdateRelationListWithoutSymphonyChart } from "../halfBakedIdea/updateRelationListWithoutSymphonyChart";
import { SchrodingerUserUpdateRelationWithoutSymphonyChart } from "../schrodingerUser/updateRelationWithoutSymphonyChart";
import { TeleportationFailureUpdateRelationListWithoutSymphonyCharts } from "../teleportationFailure/updateRelationListWithoutSymphonyCharts";
import { UnstableFrequencyUpdateRelationWithoutSymphonyCharts } from "../unstableFrequency/updateRelationWithoutSymphonyCharts";

export const SymphonyChartUpdateWithoutThoughtCaches = builder.inputRef<any>("SymphonyChartUpdateWithoutThoughtCaches").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    alternativeFacts: t.field({
      type: AlternativeFactUpdateRelationListWithoutSymphonyChart,
      required: false,
    }),
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
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutSymphonyCharts,
      required: false,
    }),
  }),
});
