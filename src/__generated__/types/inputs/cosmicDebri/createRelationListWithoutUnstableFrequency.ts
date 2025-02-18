import { builder } from "src/builder";

import { CosmicDebriCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("CosmicDebriCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [CosmicDebriWhereUnique] }),
      create: t.field({ type: [CosmicDebriCreateWithoutUnstableFrequency] }),
    }),
  });
