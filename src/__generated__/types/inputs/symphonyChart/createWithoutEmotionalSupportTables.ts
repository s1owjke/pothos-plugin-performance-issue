import { builder } from "src/builder";

import { AlternativeFactCreateRelationListWithoutSymphonyChart } from "../alternativeFact/createRelationListWithoutSymphonyChart";
import { ClassifiedSillinessCreateRelationListWithoutSymphonyChart } from "../classifiedSilliness/createRelationListWithoutSymphonyChart";
import { GhostRecordCreateRelationWithoutSymphonyChart } from "../ghostRecord/createRelationWithoutSymphonyChart";
import { GlitchRegistryCreateRelationListWithoutSymphonyChart } from "../glitchRegistry/createRelationListWithoutSymphonyChart";
import { HalfBakedIdeaCreateRelationListWithoutSymphonyChart } from "../halfBakedIdea/createRelationListWithoutSymphonyChart";
import { SchrodingerUserCreateRelationWithoutSymphonyChart } from "../schrodingerUser/createRelationWithoutSymphonyChart";
import { TeleportationFailureCreateRelationListWithoutSymphonyCharts } from "../teleportationFailure/createRelationListWithoutSymphonyCharts";
import { ThoughtCacheCreateRelationListWithoutSymphonyChart } from "../thoughtCache/createRelationListWithoutSymphonyChart";
import { UnstableFrequencyCreateRelationWithoutSymphonyCharts } from "../unstableFrequency/createRelationWithoutSymphonyCharts";

export const SymphonyChartCreateWithoutEmotionalSupportTables = builder.inputRef<any>("SymphonyChartCreateWithoutEmotionalSupportTables").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    alternativeFacts: t.field({
      type: AlternativeFactCreateRelationListWithoutSymphonyChart,
      required: false,
    }),
    classifiedSillinesses: t.field({
      type: ClassifiedSillinessCreateRelationListWithoutSymphonyChart,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutSymphonyChart,
      required: false,
    }),
    glitchRegistries: t.field({
      type: GlitchRegistryCreateRelationListWithoutSymphonyChart,
      required: false,
    }),
    halfBakedIdeas: t.field({
      type: HalfBakedIdeaCreateRelationListWithoutSymphonyChart,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutSymphonyChart,
      required: false,
    }),
    teleportationFailures: t.field({
      type: TeleportationFailureCreateRelationListWithoutSymphonyCharts,
      required: false,
    }),
    thoughtCaches: t.field({
      type: ThoughtCacheCreateRelationListWithoutSymphonyChart,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutSymphonyCharts,
      required: false,
    }),
  }),
});
