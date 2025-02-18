import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutPendingDisasters = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutPendingDisasters] }),
    }),
  });
