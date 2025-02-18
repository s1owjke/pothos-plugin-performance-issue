import { builder } from "src/builder";

import { SentientMetadatumCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { SentientMetadatumWhereUnique } from "./whereUnique";

export const SentientMetadatumCreateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("SentientMetadatumCreateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SentientMetadatumWhereUnique] }),
      create: t.field({ type: [SentientMetadatumCreateWithoutSpontaneousCombustions] }),
    }),
  });
