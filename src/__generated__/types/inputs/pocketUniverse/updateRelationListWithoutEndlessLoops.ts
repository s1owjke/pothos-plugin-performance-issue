import { builder } from "src/builder";

import { PocketUniverseCreateWithoutEndlessLoops } from "./createWithoutEndlessLoops";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseUpdateRelationListWithoutEndlessLoops = builder
  .inputRef<any>("PocketUniverseUpdateRelationListWithoutEndlessLoops")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PocketUniverseWhereUnique] }),
      set: t.field({ type: [PocketUniverseWhereUnique] }),
      disconnect: t.field({ type: [PocketUniverseWhereUnique] }),
      create: t.field({ type: [PocketUniverseCreateWithoutEndlessLoops] }),
    }),
  });
