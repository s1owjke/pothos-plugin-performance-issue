import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("SentientMetadatumUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SentientMetadatumWhereUnique] }),
      set: t.field({ type: [SentientMetadatumWhereUnique] }),
      disconnect: t.field({ type: [SentientMetadatumWhereUnique] }),
      create: t.field({ type: [SentientMetadatumCreateWithoutGravityOverride] }),
    }),
  });
