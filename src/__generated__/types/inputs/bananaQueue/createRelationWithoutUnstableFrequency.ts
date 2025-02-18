import { builder } from "src/builder";

import { BananaQueueCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("BananaQueueCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: BananaQueueWhereUnique }),
      create: t.field({ type: BananaQueueCreateWithoutUnstableFrequency }),
    }),
  });
