import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationWithoutInfiniteScrollLog = builder
  .inputRef<any>("EmotionalSupportTableCreateRelationWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: EmotionalSupportTableWhereUnique }),
      create: t.field({ type: EmotionalSupportTableCreateWithoutInfiniteScrollLog }),
    }),
  });
