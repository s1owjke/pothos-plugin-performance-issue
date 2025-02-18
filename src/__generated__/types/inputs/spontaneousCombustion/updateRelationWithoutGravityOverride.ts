import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SpontaneousCombustionUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("SpontaneousCombustionUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      disconnect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutGravityOverride }),
      update: t.field({ type: SpontaneousCombustionUpdateWithoutGravityOverride }),
    }),
  });
