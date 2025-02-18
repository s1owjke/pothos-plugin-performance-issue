import { builder } from "src/builder";

import { DoomedExperimentUpdateRelationListWithoutSpontaneousCombustions } from "../doomedExperiment/updateRelationListWithoutSpontaneousCombustions";
import { GravityOverrideUpdateRelationWithoutSpontaneousCombustions } from "../gravityOverride/updateRelationWithoutSpontaneousCombustions";
import { MissingContextUpdateRelationWithoutSpontaneousCombustions } from "../missingContext/updateRelationWithoutSpontaneousCombustions";
import { UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions } from "../underappreciatedComment/updateRelationListWithoutSpontaneousCombustions";

export const SpontaneousCombustionUpdateWithoutSentientMetadata = builder
  .inputRef<any>("SpontaneousCombustionUpdateWithoutSentientMetadata")
  .implement({
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
      missingContext: t.field({
        type: MissingContextUpdateRelationWithoutSpontaneousCombustions,
        required: false,
      }),
      symphonyChartId: t.field({ type: "String", required: false }),
      underappreciatedComments: t.field({
        type: UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions,
        required: false,
      }),
    }),
  });
