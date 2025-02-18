import { builder } from "src/builder";

import { PocketUniverseCreateWithoutOverdueRevolutions } from "./createWithoutOverdueRevolutions";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseCreateRelationWithoutOverdueRevolutions = builder
  .inputRef<any>("PocketUniverseCreateRelationWithoutOverdueRevolutions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PocketUniverseWhereUnique }),
      create: t.field({ type: PocketUniverseCreateWithoutOverdueRevolutions }),
    }),
  });
