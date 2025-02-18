import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutBananaQueues } from "./createWithoutBananaQueues";
import { UnstableFrequencyUpdateWithoutBananaQueues } from "./updateWithoutBananaQueues";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutBananaQueues = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutBananaQueues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutBananaQueues }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutBananaQueues }),
    }),
  });
