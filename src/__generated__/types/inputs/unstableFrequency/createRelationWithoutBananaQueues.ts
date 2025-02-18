import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutBananaQueues } from "./createWithoutBananaQueues";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutBananaQueues = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutBananaQueues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutBananaQueues }),
    }),
  });
