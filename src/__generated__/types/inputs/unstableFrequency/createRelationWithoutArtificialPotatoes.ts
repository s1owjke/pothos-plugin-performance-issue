import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutArtificialPotatoes } from "./createWithoutArtificialPotatoes";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutArtificialPotatoes = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutArtificialPotatoes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutArtificialPotatoes }),
    }),
  });
