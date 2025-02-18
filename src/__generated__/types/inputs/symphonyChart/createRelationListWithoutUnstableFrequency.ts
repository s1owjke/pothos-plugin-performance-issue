import { builder } from "src/builder";

import { SymphonyChartCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutUnstableFrequency] }),
    }),
  });
