import { builder } from "src/builder";

import { SymphonyChartCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutUnstableFrequency] }),
    }),
  });
