import { builder } from "src/builder";

import { SymphonyChartCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutHalfBakedIdeas = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutHalfBakedIdeas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutHalfBakedIdeas] }),
    }),
  });
