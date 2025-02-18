import { builder } from "src/builder";

import { SymphonyChartCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutGhostRecord = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutGhostRecord] }),
    }),
  });
