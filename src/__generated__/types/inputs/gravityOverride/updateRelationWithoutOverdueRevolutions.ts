import { builder } from "src/builder";

import { GravityOverrideCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { GravityOverrideUpdateWithoutOverdueRevolutions } from "./updateWithoutOverdueRevolutions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutOverdueRevolutions = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutOverdueRevolutions }),
      update: t.field({ type: GravityOverrideUpdateWithoutOverdueRevolutions }),
    }),
  });
