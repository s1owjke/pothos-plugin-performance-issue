import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { GravityOverrideUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutUnstableFrequency }),
      update: t.field({ type: GravityOverrideUpdateWithoutUnstableFrequency }),
    }),
  });
