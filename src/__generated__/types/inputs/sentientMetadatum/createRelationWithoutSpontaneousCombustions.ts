import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumCreateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("SentientMetadatumCreateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SentientMetadatumWhereUnique }),
      create: t.field({ type: SentientMetadatumCreateWithoutSpontaneousCombustions }),
    }),
  });
