import { builder } from "src/builder";

import { GravityOverrideCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutUnstableFrequency] }),
    }),
  });
