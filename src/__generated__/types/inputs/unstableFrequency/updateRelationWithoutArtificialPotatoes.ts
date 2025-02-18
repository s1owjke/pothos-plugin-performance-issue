import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutArtificialPotatoes } from "./createWithoutArtificialPotatoes";
import { UnstableFrequencyUpdateWithoutArtificialPotatoes } from "./updateWithoutArtificialPotatoes";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutArtificialPotatoes = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutArtificialPotatoes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutArtificialPotatoes }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutArtificialPotatoes }),
    }),
  });
