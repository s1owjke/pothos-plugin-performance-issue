import { builder } from "src/builder";

import { BananaQueueCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("BananaQueueCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [BananaQueueWhereUnique] }),
      create: t.field({ type: [BananaQueueCreateWithoutUnstableFrequency] }),
    }),
  });
