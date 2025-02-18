import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutMissingContext } from "./createWithoutMissingContext";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationListWithoutMissingContext = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationListWithoutMissingContext")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutMissingContext] }),
    }),
  });
