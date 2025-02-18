import { builder } from "src/builder";

import { SymphonyChartCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("SymphonyChartCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutUnstableFrequency }),
    }),
  });
