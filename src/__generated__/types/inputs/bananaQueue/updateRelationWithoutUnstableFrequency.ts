import { builder } from "src/builder";

import { BananaQueueCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { BananaQueueUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("BananaQueueUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: BananaQueueWhereUnique }),
      disconnect: t.field({ type: BananaQueueWhereUnique }),
      create: t.field({ type: BananaQueueCreateWithoutUnstableFrequency }),
      update: t.field({ type: BananaQueueUpdateWithoutUnstableFrequency }),
    }),
  });
