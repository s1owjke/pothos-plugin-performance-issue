import { builder } from "src/builder";

import { GravityOverrideCreateWithoutEndlessLoops } from "./createWithoutEndlessLoops";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutEndlessLoops = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutEndlessLoops")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutEndlessLoops] }),
    }),
  });
