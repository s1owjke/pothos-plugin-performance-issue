import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutArtificialPotatoes } from "./createWithoutArtificialPotatoes";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutArtificialPotatoes = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutArtificialPotatoes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutArtificialPotatoes] }),
    }),
  });
