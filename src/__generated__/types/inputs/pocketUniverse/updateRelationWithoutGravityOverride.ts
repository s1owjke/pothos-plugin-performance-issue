import { builder } from "src/builder";

import { PocketUniverseCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { PocketUniverseUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("PocketUniverseUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PocketUniverseWhereUnique }),
      disconnect: t.field({ type: PocketUniverseWhereUnique }),
      create: t.field({ type: PocketUniverseCreateWithoutGravityOverride }),
      update: t.field({ type: PocketUniverseUpdateWithoutGravityOverride }),
    }),
  });
