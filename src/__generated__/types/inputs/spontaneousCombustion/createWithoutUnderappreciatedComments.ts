import { builder } from "src/builder";

import { DoomedExperimentCreateRelationListWithoutSpontaneousCombustions } from "../doomedExperiment/createRelationListWithoutSpontaneousCombustions";
import { GravityOverrideCreateRelationWithoutSpontaneousCombustions } from "../gravityOverride/createRelationWithoutSpontaneousCombustions";
import { MissingContextCreateRelationWithoutSpontaneousCombustions } from "../missingContext/createRelationWithoutSpontaneousCombustions";
import { SentientMetadatumCreateRelationWithoutSpontaneousCombustions } from "../sentientMetadatum/createRelationWithoutSpontaneousCombustions";

export const SpontaneousCombustionCreateWithoutUnderappreciatedComments = builder
  .inputRef<any>("SpontaneousCombustionCreateWithoutUnderappreciatedComments")
  .implement({
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
      missingContext: t.field({
        type: MissingContextCreateRelationWithoutSpontaneousCombustions,
        required: false,
      }),
      sentientMetadata: t.field({
        type: SentientMetadatumCreateRelationWithoutSpontaneousCombustions,
        required: false,
      }),
      symphonyChartId: t.field({ type: "String", required: false }),
    }),
  });
