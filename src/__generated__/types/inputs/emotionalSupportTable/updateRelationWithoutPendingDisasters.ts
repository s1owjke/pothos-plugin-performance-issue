import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { EmotionalSupportTableUpdateWithoutPendingDisasters } from "./updateWithoutPendingDisasters";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationWithoutPendingDisasters = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: EmotionalSupportTableWhereUnique }),
      disconnect: t.field({ type: EmotionalSupportTableWhereUnique }),
      create: t.field({ type: EmotionalSupportTableCreateWithoutPendingDisasters }),
      update: t.field({ type: EmotionalSupportTableUpdateWithoutPendingDisasters }),
    }),
  });
