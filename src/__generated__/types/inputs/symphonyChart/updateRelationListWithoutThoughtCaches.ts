import { builder } from "src/builder";

import { SymphonyChartCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutThoughtCaches = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutThoughtCaches")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutThoughtCaches] }),
    }),
  });
