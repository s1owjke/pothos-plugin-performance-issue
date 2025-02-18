import { builder } from "src/builder";

import { SymphonyChartCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutGhostRecord = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutGhostRecord] }),
    }),
  });
