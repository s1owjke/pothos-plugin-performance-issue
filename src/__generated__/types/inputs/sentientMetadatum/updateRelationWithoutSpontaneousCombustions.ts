import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { SentientMetadatumUpdateWithoutSpontaneousCombustions } from "./updateWithoutSpontaneousCombustions";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumUpdateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("SentientMetadatumUpdateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SentientMetadatumWhereUnique }),
      disconnect: t.field({ type: SentientMetadatumWhereUnique }),
      create: t.field({ type: SentientMetadatumCreateWithoutSpontaneousCombustions }),
      update: t.field({ type: SentientMetadatumUpdateWithoutSpontaneousCombustions }),
    }),
  });
