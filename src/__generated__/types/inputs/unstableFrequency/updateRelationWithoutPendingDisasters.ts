import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { UnstableFrequencyUpdateWithoutPendingDisasters } from "./updateWithoutPendingDisasters";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutPendingDisasters = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutPendingDisasters }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutPendingDisasters }),
    }),
  });
