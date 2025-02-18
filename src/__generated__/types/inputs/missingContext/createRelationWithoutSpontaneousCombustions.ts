import { builder } from "src/builder";

import { MissingContextCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextCreateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("MissingContextCreateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: MissingContextWhereUnique }),
      create: t.field({ type: MissingContextCreateWithoutSpontaneousCombustions }),
    }),
  });
