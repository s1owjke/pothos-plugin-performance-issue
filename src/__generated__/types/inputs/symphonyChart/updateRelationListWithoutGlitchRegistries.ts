import { builder } from "src/builder";

import { SymphonyChartCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutGlitchRegistries = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutGlitchRegistries] }),
    }),
  });
