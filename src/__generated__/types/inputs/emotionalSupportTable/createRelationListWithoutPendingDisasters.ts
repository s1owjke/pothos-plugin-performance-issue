import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationListWithoutPendingDisasters = builder
  .inputRef<any>("EmotionalSupportTableCreateRelationListWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutPendingDisasters] }),
    }),
  });
