import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSpontaneousCombustions } from "./createWithoutSpontaneousCombustions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutSpontaneousCombustions = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutSpontaneousCombustions] }),
    }),
  });
