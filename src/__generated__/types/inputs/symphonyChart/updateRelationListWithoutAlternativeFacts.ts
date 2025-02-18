import { builder } from "src/builder";

import { SymphonyChartCreateWithoutAlternativeFacts } from "./createWithoutAlternativeFacts";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutAlternativeFacts = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutAlternativeFacts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutAlternativeFacts] }),
    }),
  });
