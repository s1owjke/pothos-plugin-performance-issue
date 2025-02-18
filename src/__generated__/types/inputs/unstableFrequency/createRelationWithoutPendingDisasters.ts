import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutPendingDisasters = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutPendingDisasters }),
    }),
  });
