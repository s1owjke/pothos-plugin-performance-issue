import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutBananaQueues } from "./createWithoutBananaQueues";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutBananaQueues = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutBananaQueues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutBananaQueues] }),
    }),
  });
