import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ThoughtCacheUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheUpdateRelationWithoutSymphonyChart = builder.inputRef<any>("ThoughtCacheUpdateRelationWithoutSymphonyChart").implement({
  fields: (t) => ({
    connect: t.field({ type: ThoughtCacheWhereUnique }),
    disconnect: t.field({ type: ThoughtCacheWhereUnique }),
    create: t.field({ type: ThoughtCacheCreateWithoutSymphonyChart }),
    update: t.field({ type: ThoughtCacheUpdateWithoutSymphonyChart }),
  }),
});
