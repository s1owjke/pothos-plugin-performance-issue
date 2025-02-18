import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutSymphonyCharts = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutSymphonyCharts }),
    }),
  });
