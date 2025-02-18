import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutWormholeRentals } from "./createWithoutWormholeRentals";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutWormholeRentals = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutWormholeRentals")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutWormholeRentals] }),
    }),
  });
