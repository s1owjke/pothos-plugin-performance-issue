import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutMissingContext } from "./createWithoutMissingContext";
import { SpontaneousCombustionUpdateWithoutMissingContext } from "./updateWithoutMissingContext";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationWithoutMissingContext = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationWithoutMissingContext")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      disconnect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutMissingContext }),
      update: t.field({ type: SpontaneousCombustionUpdateWithoutMissingContext }),
    }),
  });
