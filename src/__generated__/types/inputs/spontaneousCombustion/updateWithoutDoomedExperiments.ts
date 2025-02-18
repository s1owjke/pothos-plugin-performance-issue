import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutSpontaneousCombustions } from "../gravityOverride/updateRelationWithoutSpontaneousCombustions";
import { MissingContextUpdateRelationWithoutSpontaneousCombustions } from "../missingContext/updateRelationWithoutSpontaneousCombustions";
import { SentientMetadatumUpdateRelationWithoutSpontaneousCombustions } from "../sentientMetadatum/updateRelationWithoutSpontaneousCombustions";
import { UnderappreciatedCommentUpdateRelationListWithoutSpontaneousCombustions } from "../underappreciatedComment/updateRelationListWithoutSpontaneousCombustions";

export const SpontaneousCombustionUpdateWithoutDoomedExperiments = builder
  .inputRef<any>("SpontaneousCombustionUpdateWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      gravityOverride: t.field({
        type: GravityOverrideUpdateRelationWithoutSpontaneousCombustions,
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
