import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { EmotionalSupportTableUpdateWithoutInfiniteScrollLog } from "./updateWithoutInfiniteScrollLog";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationWithoutInfiniteScrollLog = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: EmotionalSupportTableWhereUnique }),
      disconnect: t.field({ type: EmotionalSupportTableWhereUnique }),
      create: t.field({ type: EmotionalSupportTableCreateWithoutInfiniteScrollLog }),
      update: t.field({ type: EmotionalSupportTableUpdateWithoutInfiniteScrollLog }),
    }),
  });
