import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutSentientMetadata } from "./createWithoutSentientMetadata";
import { SpontaneousCombustionUpdateWithoutSentientMetadata } from "./updateWithoutSentientMetadata";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationWithoutSentientMetadata = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationWithoutSentientMetadata")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      disconnect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutSentientMetadata }),
      update: t.field({ type: SpontaneousCombustionUpdateWithoutSentientMetadata }),
    }),
  });
