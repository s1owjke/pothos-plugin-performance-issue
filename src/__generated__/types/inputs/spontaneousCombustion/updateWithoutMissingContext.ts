import { builder } from "src/builder";

import { DoomedExperimentUpdateRelationListWithoutSpontaneousCombustions } from "../doomedExperiment/updateRelationListWithoutSpontaneousCombustions";
import { GravityOverrideUpdateRelationWithoutSpontaneousCombustions } from "../gravityOverride/updateRelationWithoutSpontaneousCombustions";
import { SentientMetadatumUpdateRelationWithoutSpontaneousCombustions } from "../sentientMetadatum/updateRelationWithoutSpontaneousCombustions";
import { UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions } from "../underappreciatedComment/updateRelationListWithoutSpontaneousCombustions";

export const SpontaneousCombustionUpdateWithoutMissingContext = builder.inputRef<any>("SpontaneousCombustionUpdateWithoutMissingContext").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    doomedExperiments: t.field({
      type: DoomedExperimentUpdateRelationListWithoutSpontaneousCombustions,
      required: false,
    }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutSpontaneousCombustions,
      required: false,
    }),
    sentientMetadata: t.field({
      type: SentientMetadatumUpdateRelationWithoutSpontaneousCombustions,
      required: false,
    }),
    symphonyChartId: t.field({ type: "String", required: false }),
    underappreciatedComments: t.field({
      type: UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions,
      required: false,
    }),
  }),
});
