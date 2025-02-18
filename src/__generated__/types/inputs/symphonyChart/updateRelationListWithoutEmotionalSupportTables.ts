import { builder } from "src/builder";

import { SymphonyChartCreateWithoutEmotionalSupportTables } from "./createWithoutEmotionalSupportTables";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutEmotionalSupportTables = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutEmotionalSupportTables] }),
    }),
  });
