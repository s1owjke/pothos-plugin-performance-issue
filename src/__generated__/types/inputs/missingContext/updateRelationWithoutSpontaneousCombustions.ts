import { builder } from "src/builder";

import { MissingContextCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { MissingContextUpdateWithoutSpontaneousCombustions } from "./updateWithoutSpontaneousCombustions";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("MissingContextUpdateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: MissingContextWhereUnique }),
      disconnect: t.field({ type: MissingContextWhereUnique }),
      create: t.field({ type: MissingContextCreateWithoutSpontaneousCombustions }),
      update: t.field({ type: MissingContextUpdateWithoutSpontaneousCombustions }),
    }),
  });
