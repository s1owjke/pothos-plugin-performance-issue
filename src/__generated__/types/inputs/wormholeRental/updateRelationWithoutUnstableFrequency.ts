import { builder } from "src/builder";

import { WormholeRentalCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { WormholeRentalUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("WormholeRentalUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: WormholeRentalWhereUnique }),
      disconnect: t.field({ type: WormholeRentalWhereUnique }),
      create: t.field({ type: WormholeRentalCreateWithoutUnstableFrequency }),
      update: t.field({ type: WormholeRentalUpdateWithoutUnstableFrequency }),
    }),
  });
