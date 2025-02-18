import { builder } from "src/builder";

import { SymphonyChartCreateWithoutEmotionalSupportTables } from "./createWithoutEmotionalSupportTables";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutEmotionalSupportTables = builder
  .inputRef<any>("SymphonyChartCreateRelationWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutEmotionalSupportTables }),
    }),
  });
