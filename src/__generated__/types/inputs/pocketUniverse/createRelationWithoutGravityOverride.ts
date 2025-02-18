import { builder } from "src/builder";

import { PocketUniverseCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("PocketUniverseCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PocketUniverseWhereUnique }),
      create: t.field({ type: PocketUniverseCreateWithoutGravityOverride }),
    }),
  });
