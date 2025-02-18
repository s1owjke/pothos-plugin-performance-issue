import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationListWithoutInfiniteScrollLog = builder
  .inputRef<any>("EmotionalSupportTableCreateRelationListWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutInfiniteScrollLog] }),
    }),
  });
