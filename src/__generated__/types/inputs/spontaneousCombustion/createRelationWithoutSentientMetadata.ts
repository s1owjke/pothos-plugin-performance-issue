import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutSentientMetadata } from "./createWithoutSentientMetadata";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationWithoutSentientMetadata = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationWithoutSentientMetadata")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutSentientMetadata }),
    }),
  });
