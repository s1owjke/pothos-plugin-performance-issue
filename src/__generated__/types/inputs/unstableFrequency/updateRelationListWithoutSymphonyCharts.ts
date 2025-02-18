import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutSymphonyCharts = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutSymphonyCharts] }),
    }),
  });
