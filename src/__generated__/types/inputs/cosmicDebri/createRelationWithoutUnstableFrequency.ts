import { builder } from "src/builder";

import { CosmicDebriCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("CosmicDebriCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: CosmicDebriWhereUnique }),
      create: t.field({ type: CosmicDebriCreateWithoutUnstableFrequency }),
    }),
  });
