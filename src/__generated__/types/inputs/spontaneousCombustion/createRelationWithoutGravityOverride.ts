import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SpontaneousCombustionWhereUnique }),
      create: t.field({ type: SpontaneousCombustionCreateWithoutGravityOverride }),
    }),
  });
