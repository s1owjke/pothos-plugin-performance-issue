import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutSentientMetadatas } from "../gravityOverride/createRelationWithoutSentientMetadatas";

export const SentientMetadatumCreateWithoutSpontaneousCombustions = builder
  .inputRef<any>("SentientMetadatumCreateWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      gravityOverride: t.field({
        type: GravityOverrideCreateRelationWithoutSentientMetadatas,
        required: true,
      }),
    }),
  });
