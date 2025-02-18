import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { GravityOverrideUpdateWithoutSpontaneousCombustions } from "./updateWithoutSpontaneousCombustions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutSpontaneousCombustions }),
      update: t.field({ type: GravityOverrideUpdateWithoutSpontaneousCombustions }),
    }),
  });
