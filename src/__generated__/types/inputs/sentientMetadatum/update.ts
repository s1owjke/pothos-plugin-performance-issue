import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutSentientMetadatas } from "../gravityOverride/updateRelationWithoutSentientMetadatas";
import { SpontaneousCombustionUpdateRelationListWithoutSentientMetadata } from "../spontaneousCombustion/updateRelationListWithoutSentientMetadata";

export const SentientMetadatumUpdate = builder.inputRef<any>("SentientMetadatumUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutSentientMetadatas,
      required: false,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionUpdateRelationListWithoutSentientMetadata,
      required: false,
    }),
  }),
});
