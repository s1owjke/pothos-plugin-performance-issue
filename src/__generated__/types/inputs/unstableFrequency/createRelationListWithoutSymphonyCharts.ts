import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutSymphonyCharts } from "./createWithoutSymphonyCharts";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutSymphonyCharts = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutSymphonyCharts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutSymphonyCharts] }),
    }),
  });
