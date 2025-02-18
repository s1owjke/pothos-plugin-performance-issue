import { builder } from "src/builder";

import { SpontaneousCombustionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SpontaneousCombustionWhereUnique } from "./whereUnique";

export const SpontaneousCombustionCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("SpontaneousCombustionCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SpontaneousCombustionWhereUnique] }),
      create: t.field({ type: [SpontaneousCombustionCreateWithoutGravityOverride] }),
    }),
  });
