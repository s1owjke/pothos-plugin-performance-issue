import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSentientMetadatas } from "./createWithoutSentientMetadatas";
import { GravityOverrideUpdateWithoutSentientMetadatas } from "./updateWithoutSentientMetadatas";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutSentientMetadatas = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutSentientMetadatas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutSentientMetadatas }),
      update: t.field({ type: GravityOverrideUpdateWithoutSentientMetadatas }),
    }),
  });
