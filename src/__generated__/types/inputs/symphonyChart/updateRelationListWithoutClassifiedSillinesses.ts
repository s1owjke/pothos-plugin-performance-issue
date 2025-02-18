import { builder } from "src/builder";

import { SymphonyChartCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutClassifiedSillinesses = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutClassifiedSillinesses] }),
    }),
  });
