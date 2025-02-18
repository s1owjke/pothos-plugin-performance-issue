import { builder } from "src/builder";

import { CosmicDebriCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { CosmicDebriUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("CosmicDebriUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: CosmicDebriWhereUnique }),
      disconnect: t.field({ type: CosmicDebriWhereUnique }),
      create: t.field({ type: CosmicDebriCreateWithoutUnstableFrequency }),
      update: t.field({ type: CosmicDebriUpdateWithoutUnstableFrequency }),
    }),
  });
