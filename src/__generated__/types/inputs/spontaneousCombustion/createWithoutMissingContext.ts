import { builder } from "src/builder";

import { DoomedExperimentCreateRelationListWithoutSpontaneousCombustions } from "../doomedExperiment/createRelationListWithoutSpontaneousCombustions";
import { GravityOverrideCreateRelationWithoutSpontaneousCombustions } from "../gravityOverride/createRelationWithoutSpontaneousCombustions";
import { SentientMetadatumCreateRelationWithoutSpontaneousCombustions } from "../sentientMetadatum/createRelationWithoutSpontaneousCombustions";
import { UnderappreciatedCommentCreateRelationListWithoutSpontaneousCombustions } from "../underappreciatedComment/createRelationListWithoutSpontaneousCombustions";

export const SpontaneousCombustionCreateWithoutMissingContext = builder.inputRef<any>("SpontaneousCombustionCreateWithoutMissingContext").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    doomedExperiments: t.field({
      type: DoomedExperimentCreateRelationListWithoutSpontaneousCombustions,
      required: false,
    }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutSpontaneousCombustions,
      required: false,
    }),
    sentientMetadata: t.field({
      type: SentientMetadatumCreateRelationWithoutSpontaneousCombustions,
      required: false,
    }),
    symphonyChartId: t.field({ type: "String", required: false }),
    underappreciatedComments: t.field({
      type: UnderappreciatedCommentCreateRelationListWithoutSpontaneousCombustions,
      required: false,
    }),
  }),
});
