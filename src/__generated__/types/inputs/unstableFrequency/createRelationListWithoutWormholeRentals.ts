import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutWormholeRentals } from "./createWithoutWormholeRentals";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutWormholeRentals = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutWormholeRentals")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutWormholeRentals] }),
    }),
  });
