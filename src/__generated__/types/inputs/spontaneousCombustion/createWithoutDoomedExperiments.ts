import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutSpontaneousCombustions } from "../gravityOverride/createRelationWithoutSpontaneousCombustions";
import { MissingContextCreateRelationWithoutSpontaneousCombustions } from "../missingContext/createRelationWithoutSpontaneousCombustions";
import { SentientMetadatumCreateRelationWithoutSpontaneousCombustions } from "../sentientMetadatum/createRelationWithoutSpontaneousCombustions";
import { UnderappreciatedCommentCreateRelationListWithoutSpontaneousCombustions } from "../underappreciatedComment/createRelationListWithoutSpontaneousCombustions";

export const SpontaneousCombustionCreateWithoutDoomedExperiments = builder
  .inputRef<any>("SpontaneousCombustionCreateWithoutDoomedExperiments")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      gravityOverride: t.field({
        type: GravityOverrideCreateRelationWithoutSpontaneousCombustions,
        required: false,
      }),
      missingContext: t.field({
        type: MissingContextCreateRelationWithoutSpontaneousCombustions,
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
