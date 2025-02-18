import { builder } from "src/builder";

import { GravityOverrideCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutPocketUniverses = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutPocketUniverses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutPocketUniverses] }),
    }),
  });
