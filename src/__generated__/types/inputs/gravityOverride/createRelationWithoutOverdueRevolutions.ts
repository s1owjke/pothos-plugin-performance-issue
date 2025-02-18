import { builder } from "src/builder";

import { GravityOverrideCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutOverdueRevolutions = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutOverdueRevolutions }),
    }),
  });
