import { builder } from "src/builder";

import { SymphonyChartCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationListWithoutHalfBakedIdeas = builder
  .inputRef<any>("SymphonyChartUpdateRelationListWithoutHalfBakedIdeas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      set: t.field({ type: [SymphonyChartWhereUnique] }),
      disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutHalfBakedIdeas] }),
    }),
  });
