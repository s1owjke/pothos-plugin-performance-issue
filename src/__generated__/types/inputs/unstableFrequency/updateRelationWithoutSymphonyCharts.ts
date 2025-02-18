import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { UnstableFrequencyUpdateWithoutSymphonyCharts } from "./updateWithoutSymphonyCharts";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutSymphonyCharts = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutSymphonyCharts }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutSymphonyCharts }),
    }),
  });
