import { builder } from "src/builder";

import { MissingContextCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextCreateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("MissingContextCreateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [MissingContextWhereUnique] }),
      create: t.field({ type: [MissingContextCreateWithoutSpontaneousCombustions] }),
    }),
  });
