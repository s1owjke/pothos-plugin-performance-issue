import { builder } from "src/builder";

import { WormholeRentalCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { WormholeRentalWhereUnique } from "./whereUnique";

export const WormholeRentalCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("WormholeRentalCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [WormholeRentalWhereUnique] }),
      create: t.field({ type: [WormholeRentalCreateWithoutUnstableFrequency] }),
    }),
  });
