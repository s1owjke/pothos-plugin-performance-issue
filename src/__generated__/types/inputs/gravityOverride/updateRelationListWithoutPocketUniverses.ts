import { builder } from "src/builder";

import { GravityOverrideCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutPocketUniverses = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutPocketUniverses] }),
    }),
  });
