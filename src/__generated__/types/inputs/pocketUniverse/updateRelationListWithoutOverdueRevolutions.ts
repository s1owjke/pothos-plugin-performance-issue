import { builder } from "src/builder";

import { PocketUniverseCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelationListWithoutOverdueRevolutions = builder
  .inputRef<any>("PocketUniverseUpdateRelationListWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PocketUniverseWhereUnique] }),
      set: t.field({ type: [PocketUniverseWhereUnique] }),
      disconnect: t.field({ type: [PocketUniverseWhereUnique] }),
      create: t.field({ type: [PocketUniverseCreateWithoutOverdueRevolutions] }),
    }),
  });
