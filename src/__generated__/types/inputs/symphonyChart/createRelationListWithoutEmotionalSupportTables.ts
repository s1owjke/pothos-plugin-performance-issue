import { builder } from "src/builder";

import { SymphonyChartCreateWithoutEmotionalSupportTables } from "./createWithoutEmotionalSupportTables";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutEmotionalSupportTables = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutEmotionalSupportTables] }),
    }),
  });
