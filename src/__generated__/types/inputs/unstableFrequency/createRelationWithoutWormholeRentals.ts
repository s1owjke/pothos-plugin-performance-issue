import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutWormholeRentals } from "./createWithoutWormholeRentals";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutWormholeRentals = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutWormholeRentals")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutWormholeRentals }),
    }),
  });
