import { builder } from "src/builder";

import { SymphonyChartCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { SymphonyChartUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("SymphonyChartUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      disconnect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutUnstableFrequency }),
      update: t.field({ type: SymphonyChartUpdateWithoutUnstableFrequency }),
    }),
  });
