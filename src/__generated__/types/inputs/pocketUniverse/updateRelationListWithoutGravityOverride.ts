import { builder } from "src/builder";

import { PocketUniverseCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("PocketUniverseUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PocketUniverseWhereUnique] }),
      set: t.field({ type: [PocketUniverseWhereUnique] }),
      disconnect: t.field({ type: [PocketUniverseWhereUnique] }),
      create: t.field({ type: [PocketUniverseCreateWithoutGravityOverride] }),
    }),
  });
