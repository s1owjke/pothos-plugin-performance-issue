import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheCreateRelationWithoutSymphonyChart = builder.inputRef<any>("ThoughtCacheCreateRelationWithoutSymphonyChart").implement({
  fields: (t) => ({
    connect: t.field({ type: ThoughtCacheWhereUnique }),
    create: t.field({ type: ThoughtCacheCreateWithoutSymphonyChart }),
  }),
});
