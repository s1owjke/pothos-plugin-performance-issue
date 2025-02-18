import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("SentientMetadatumCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SentientMetadatumWhereUnique }),
      create: t.field({ type: SentientMetadatumCreateWithoutGravityOverride }),
    }),
  });
