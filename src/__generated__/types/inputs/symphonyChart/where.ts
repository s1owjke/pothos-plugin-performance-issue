import { builder } from "src/builder";

import { AlternativeFactWhereRelationList } from "../alternativeFact/whereRelationList";
import { ClassifiedSillinessWhereRelationList } from "../classifiedSilliness/whereRelationList";
import { DateTimeFilter } from "../dateTimeFilter";
import { EmotionalSupportTableWhereRelationList } from "../emotionalSupportTable/whereRelationList";
import { GhostRecordWhere } from "../ghostRecord/where";
import { GlitchRegistryWhereRelationList } from "../glitchRegistry/whereRelationList";
import { HalfBakedIdeaWhereRelationList } from "../halfBakedIdea/whereRelationList";
import { IdFilter } from "../idFilter";
import { SchrodingerUserWhere } from "../schrodingerUser/where";
import { TeleportationFailureWhereRelationList } from "../teleportationFailure/whereRelationList";
import { ThoughtCacheWhereRelationList } from "../thoughtCache/whereRelationList";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const SymphonyChartWhere = builder.inputRef<any>("SymphonyChartWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    alternativeFacts: t.field({ type: AlternativeFactWhereRelationList, required: false }),
    classifiedSillinesses: t.field({ type: ClassifiedSillinessWhereRelationList, required: false }),
    emotionalSupportTables: t.field({
      type: EmotionalSupportTableWhereRelationList,
      required: false,
    }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    glitchRegistries: t.field({ type: GlitchRegistryWhereRelationList, required: false }),
    halfBakedIdeas: t.field({ type: HalfBakedIdeaWhereRelationList, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    teleportationFailures: t.field({
      type: TeleportationFailureWhereRelationList,
      required: false,
    }),
    thoughtCaches: t.field({ type: ThoughtCacheWhereRelationList, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [SymphonyChartWhere], required: false }),
    OR: t.field({ type: [SymphonyChartWhere], required: false }),
    NOT: t.field({ type: [SymphonyChartWhere], required: false }),
  }),
});
