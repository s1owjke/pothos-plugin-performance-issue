import { builder } from "src/builder";

import { GravityOverrideCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutOverdueRevolutions = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutOverdueRevolutions] }),
    }),
  });
