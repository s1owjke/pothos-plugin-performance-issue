import { builder } from "src/builder";

import { WormholeRentalCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("WormholeRentalCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: WormholeRentalWhereUnique }),
      create: t.field({ type: WormholeRentalCreateWithoutUnstableFrequency }),
    }),
  });
