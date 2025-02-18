import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutCosmicDebrises } from "./createWithoutCosmicDebrises";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutCosmicDebrises = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutCosmicDebrises")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutCosmicDebrises] }),
    }),
  });
