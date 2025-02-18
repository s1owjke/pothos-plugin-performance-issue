import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutMissingContext } from "./createWithoutMissingContext";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationWithoutMissingContext = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationWithoutMissingContext")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutMissingContext }),
    }),
  });
