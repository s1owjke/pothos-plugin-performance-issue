import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutSentientMetadatas } from "../gravityOverride/createRelationWithoutSentientMetadatas";
import { SpontaneousCombustionCreateRelationListWithoutSentientMetadata } from "../spontaneousCombustion/createRelationListWithoutSentientMetadata";

export const SentientMetadatumCreate = builder.inputRef<any>("SentientMetadatumCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutSentientMetadatas,
      required: true,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutSentientMetadata,
      required: false,
    }),
  }),
});
