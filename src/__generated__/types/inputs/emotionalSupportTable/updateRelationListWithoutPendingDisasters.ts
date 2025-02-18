import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationListWithoutPendingDisasters = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationListWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      set: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      disconnect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutPendingDisasters] }),
    }),
  });
