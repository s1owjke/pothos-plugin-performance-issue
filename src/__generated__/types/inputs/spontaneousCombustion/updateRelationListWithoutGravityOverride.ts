import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      set: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      disconnect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutGravityOverride] }),
    }),
  });
