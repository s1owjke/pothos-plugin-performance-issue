import { builder } from "src/builder";

import { GravityOverrideCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutOverdueRevolutions = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutOverdueRevolutions] }),
    }),
  });
