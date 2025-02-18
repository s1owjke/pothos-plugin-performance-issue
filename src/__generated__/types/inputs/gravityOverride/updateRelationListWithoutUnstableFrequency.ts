import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutUnstableFrequency] }),
    }),
  });
