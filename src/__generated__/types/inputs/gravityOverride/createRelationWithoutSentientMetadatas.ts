import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSentientMetadatas } from "./createWithoutSentientMetadatas";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutSentientMetadatas = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutSentientMetadatas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutSentientMetadatas }),
    }),
  });
