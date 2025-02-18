import { builder } from "src/builder";

import { GravityOverrideCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { GravityOverrideUpdateWithoutPocketUniverses } from "./updateWithoutPocketUniverses";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutPocketUniverses = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutPocketUniverses }),
      update: t.field({ type: GravityOverrideUpdateWithoutPocketUniverses }),
    }),
  });
