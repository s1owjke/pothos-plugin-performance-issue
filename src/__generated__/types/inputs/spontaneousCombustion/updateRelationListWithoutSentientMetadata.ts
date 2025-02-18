import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutSentientMetadata } from "./createWithoutSentientMetadata";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationListWithoutSentientMetadata = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationListWithoutSentientMetadata")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      set: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      disconnect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutSentientMetadata] }),
    }),
  });
