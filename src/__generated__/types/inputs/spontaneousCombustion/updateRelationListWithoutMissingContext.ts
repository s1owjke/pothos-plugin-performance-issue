import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutMissingContext } from "./createWithoutMissingContext";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationListWithoutMissingContext = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationListWithoutMissingContext")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      set: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      disconnect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutMissingContext] }),
    }),
  });
