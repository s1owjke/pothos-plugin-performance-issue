import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutSentientMetadatas } from "../gravityOverride/updateRelationWithoutSentientMetadatas";

export const SentientMetadatumUpdateWithoutSpontaneousCombustions = builder
  .inputRef<any>("SentientMetadatumUpdateWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      gravityOverride: t.field({
        type: GravityOverrideUpdateRelationWithoutSentientMetadatas,
        required: false,
      }),
    }),
  });
