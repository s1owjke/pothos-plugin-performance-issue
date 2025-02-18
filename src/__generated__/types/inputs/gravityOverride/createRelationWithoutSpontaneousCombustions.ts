import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutSpontaneousCombustions = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutSpontaneousCombustions }),
    }),
  });
