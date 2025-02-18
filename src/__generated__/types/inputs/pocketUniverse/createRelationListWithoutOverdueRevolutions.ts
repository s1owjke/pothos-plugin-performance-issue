import { builder } from "src/builder";

import { PocketUniverseCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseCreateRelationListWithoutOverdueRevolutions = builder
  .inputRef<any>("PocketUniverseCreateRelationListWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PocketUniverseWhereUnique] }),
      create: t.field({ type: [PocketUniverseCreateWithoutOverdueRevolutions] }),
    }),
  });
