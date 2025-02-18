import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SentientMetadatumUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("SentientMetadatumUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SentientMetadatumWhereUnique }),
      disconnect: t.field({ type: SentientMetadatumWhereUnique }),
      create: t.field({ type: SentientMetadatumCreateWithoutGravityOverride }),
      update: t.field({ type: SentientMetadatumUpdateWithoutGravityOverride }),
    }),
  });
