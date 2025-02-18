import { builder } from "src/builder";

import { PocketUniverseCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { PocketUniverseUpdateWithoutOverdueRevolutions } from "./updateWithoutOverdueRevolutions";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelationWithoutOverdueRevolutions = builder
  .inputRef<any>("PocketUniverseUpdateRelationWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PocketUniverseWhereUnique }),
      disconnect: t.field({ type: PocketUniverseWhereUnique }),
      create: t.field({ type: PocketUniverseCreateWithoutOverdueRevolutions }),
      update: t.field({ type: PocketUniverseUpdateWithoutOverdueRevolutions }),
    }),
  });
