import { builder } from "src/builder";

import { BananaQueueCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("BananaQueueUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [BananaQueueWhereUnique] }),
      set: t.field({ type: [BananaQueueWhereUnique] }),
      disconnect: t.field({ type: [BananaQueueWhereUnique] }),
      create: t.field({ type: [BananaQueueCreateWithoutUnstableFrequency] }),
    }),
  });
