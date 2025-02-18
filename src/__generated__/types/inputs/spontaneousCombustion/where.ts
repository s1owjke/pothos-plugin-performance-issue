import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { DoomedExperimentWhereRelationList } from "../doomedExperiment/whereRelationList";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { MissingContextWhere } from "../missingContext/where";
import { SentientMetadatumWhere } from "../sentientMetadatum/where";
import { StringFilter } from "../stringFilter";
import { UnderappreciatedCommentWhereRelationList } from "../underappreciatedComment/whereRelationList";

export const SpontaneousCombustionWhere = builder.inputRef<any>("SpontaneousCombustionWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    doomedExperiments: t.field({ type: DoomedExperimentWhereRelationList, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    missingContext: t.field({ type: MissingContextWhere, required: false }),
    missingContextId: t.field({ type: IdFilter, required: false }),
    sentientMetadata: t.field({ type: SentientMetadatumWhere, required: false }),
    sentientMetadataId: t.field({ type: IdFilter, required: false }),
    symphonyChartId: t.field({ type: StringFilter, required: false }),
    underappreciatedComments: t.field({
      type: UnderappreciatedCommentWhereRelationList,
      required: false,
    }),
    AND: t.field({ type: [SpontaneousCombustionWhere], required: false }),
    OR: t.field({ type: [SpontaneousCombustionWhere], required: false }),
    NOT: t.field({ type: [SpontaneousCombustionWhere], required: false }),
  }),
});
