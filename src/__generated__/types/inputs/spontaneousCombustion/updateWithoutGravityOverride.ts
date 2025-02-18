import { builder } from "src/builder";

import { DoomedExperimentUpdateRelationListWithoutSpontaneousCombustions } from "../doomedExperiment/updateRelationListWithoutSpontaneousCombustions";
import { MissingContextUpdateRelationWithoutSpontaneousCombustions } from "../missingContext/updateRelationWithoutSpontaneousCombustions";
import { SentientMetadatumUpdateRelationWithoutSpontaneousCombustions } from "../sentientMetadatum/updateRelationWithoutSpontaneousCombustions";
import { UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions } from "../underappreciatedComment/updateRelationListWithoutSpontaneousCombustions";

export const SpontaneousCombustionUpdateWithoutGravityOverride = builder
  .inputRef<any>("SpontaneousCombustionUpdateWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      doomedExperiments: t.field({
        type: DoomedExperimentUpdateRelationListWithoutSpontaneousCombustions,
        required: false,
      }),
      missingContext: t.field({
        type: MissingContextUpdateRelationWithoutSpontaneousCombustions,
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
