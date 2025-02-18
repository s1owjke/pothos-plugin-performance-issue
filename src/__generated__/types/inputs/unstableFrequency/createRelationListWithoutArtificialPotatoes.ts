import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutArtificialPotatoes } from "./createWithoutArtificialPotatoes";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutArtificialPotatoes = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutArtificialPotatoes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutArtificialPotatoes] }),
    }),
  });
