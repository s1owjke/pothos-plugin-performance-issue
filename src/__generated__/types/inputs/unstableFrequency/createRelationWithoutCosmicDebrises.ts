import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutCosmicDebrises } from "./createWithoutCosmicDebrises";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutCosmicDebrises = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutCosmicDebrises")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutCosmicDebrises }),
    }),
  });
