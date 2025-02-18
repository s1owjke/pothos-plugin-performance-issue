import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("SentientMetadatumCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SentientMetadatumWhereUnique] }),
      create: t.field({ type: [SentientMetadatumCreateWithoutGravityOverride] }),
    }),
  });
