import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("ThoughtCacheUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThoughtCacheWhereUnique] }),
      set: t.field({ type: [ThoughtCacheWhereUnique] }),
      disconnect: t.field({ type: [ThoughtCacheWhereUnique] }),
      create: t.field({ type: [ThoughtCacheCreateWithoutSymphonyChart] }),
    }),
  });
