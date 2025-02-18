import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationWithoutPendingDisasters = builder
  .inputRef<any>("EmotionalSupportTableCreateRelationWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: EmotionalSupportTableWhereUnique }),
      create: t.field({ type: EmotionalSupportTableCreateWithoutPendingDisasters }),
    }),
  });
