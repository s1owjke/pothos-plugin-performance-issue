import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutUnstableFrequency }),
    }),
  });
