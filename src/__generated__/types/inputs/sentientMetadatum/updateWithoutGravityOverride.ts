import { builder } from "src/builder";

import { SpontaneousCombustionUpdateRelationListWithoutSentientMetadata } from "../spontaneousCombustion/updateRelationListWithoutSentientMetadata";

export const SentientMetadatumUpdateWithoutGravityOverride = builder.inputRef<any>("SentientMetadatumUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionUpdateRelationListWithoutSentientMetadata,
      required: false,
    }),
  }),
});
