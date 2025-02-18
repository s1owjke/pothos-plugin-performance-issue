import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutCosmicDebrises } from "./createWithoutCosmicDebrises";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutCosmicDebrises = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutCosmicDebrises")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutCosmicDebrises] }),
    }),
  });
