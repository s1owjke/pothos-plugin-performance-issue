import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSentientMetadatas } from "./createWithoutSentientMetadatas";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutSentientMetadatas = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutSentientMetadatas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutSentientMetadatas] }),
    }),
  });
