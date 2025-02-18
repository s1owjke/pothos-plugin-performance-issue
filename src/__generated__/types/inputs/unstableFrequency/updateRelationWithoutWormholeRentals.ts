import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutWormholeRentals } from "./createWithoutWormholeRentals";
import { UnstableFrequencyUpdateWithoutWormholeRentals } from "./updateWithoutWormholeRentals";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutWormholeRentals = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutWormholeRentals")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutWormholeRentals }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutWormholeRentals }),
    }),
  });
