import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationListWithoutInfiniteScrollLog = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationListWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      set: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      disconnect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutInfiniteScrollLog] }),
    }),
  });
