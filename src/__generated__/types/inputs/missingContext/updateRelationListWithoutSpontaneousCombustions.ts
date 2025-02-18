import { builder } from "src/builder";

import { MissingContextCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("MissingContextUpdateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [MissingContextWhereUnique] }),
      set: t.field({ type: [MissingContextWhereUnique] }),
      disconnect: t.field({ type: [MissingContextWhereUnique] }),
      create: t.field({ type: [MissingContextCreateWithoutSpontaneousCombustions] }),
    }),
  });
