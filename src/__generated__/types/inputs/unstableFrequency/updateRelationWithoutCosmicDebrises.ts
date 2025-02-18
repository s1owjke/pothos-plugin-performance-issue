import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutCosmicDebrises } from "./createWithoutCosmicDebrises";
import { UnstableFrequencyUpdateWithoutCosmicDebrises } from "./updateWithoutCosmicDebrises";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutCosmicDebrises = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutCosmicDebrises")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutCosmicDebrises }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutCosmicDebrises }),
    }),
  });
