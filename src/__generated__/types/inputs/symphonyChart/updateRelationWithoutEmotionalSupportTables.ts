import { builder } from "src/builder";

import { SymphonyChartCreateWithoutEmotionalSupportTables } from "./createWithoutEmotionalSupportTables";
import { SymphonyChartUpdateWithoutEmotionalSupportTables } from "./updateWithoutEmotionalSupportTables";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutEmotionalSupportTables = builder
  .inputRef<any>("SymphonyChartUpdateRelationWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SymphonyChartWhereUnique }),
      disconnect: t.field({ type: SymphonyChartWhereUnique }),
      create: t.field({ type: SymphonyChartCreateWithoutEmotionalSupportTables }),
      update: t.field({ type: SymphonyChartUpdateWithoutEmotionalSupportTables }),
    }),
  });
