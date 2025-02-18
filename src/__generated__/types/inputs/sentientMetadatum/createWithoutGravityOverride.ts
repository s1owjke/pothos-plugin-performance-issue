import { builder } from "src/builder";

import { SpontaneousCombustionCreateRelationListWithoutSentientMetadata } from "../spontaneousCombustion/createRelationListWithoutSentientMetadata";

export const SentientMetadatumCreateWithoutGravityOverride = builder.inputRef<any>("SentientMetadatumCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutSentientMetadata,
      required: false,
    }),
  }),
});
