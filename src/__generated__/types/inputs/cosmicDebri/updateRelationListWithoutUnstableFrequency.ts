import { builder } from "src/builder";

import { CosmicDebriCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("CosmicDebriUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [CosmicDebriWhereUnique] }),
      set: t.field({ type: [CosmicDebriWhereUnique] }),
      disconnect: t.field({ type: [CosmicDebriWhereUnique] }),
      create: t.field({ type: [CosmicDebriCreateWithoutUnstableFrequency] }),
    }),
  });
