import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("ThoughtCacheCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThoughtCacheWhereUnique] }),
      create: t.field({ type: [ThoughtCacheCreateWithoutSymphonyChart] }),
    }),
  });
