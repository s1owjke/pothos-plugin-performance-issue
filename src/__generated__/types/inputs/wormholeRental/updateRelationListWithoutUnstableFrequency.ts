import { builder } from "src/builder";

import { WormholeRentalCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("WormholeRentalUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [WormholeRentalWhereUnique] }),
      set: t.field({ type: [WormholeRentalWhereUnique] }),
      disconnect: t.field({ type: [WormholeRentalWhereUnique] }),
      create: t.field({ type: [WormholeRentalCreateWithoutUnstableFrequency] }),
    }),
  });
