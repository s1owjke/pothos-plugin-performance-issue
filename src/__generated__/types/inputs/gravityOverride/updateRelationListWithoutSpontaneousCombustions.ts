import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutSpontaneousCombustions] }),
    }),
  });
