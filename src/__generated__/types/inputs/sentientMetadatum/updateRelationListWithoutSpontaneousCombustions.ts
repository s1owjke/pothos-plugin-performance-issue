import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumUpdateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("SentientMetadatumUpdateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SentientMetadatumWhereUnique] }),
      set: t.field({ type: [SentientMetadatumWhereUnique] }),
      disconnect: t.field({ type: [SentientMetadatumWhereUnique] }),
      create: t.field({ type: [SentientMetadatumCreateWithoutSpontaneousCombustions] }),
    }),
  });
