import { builder } from "src/builder";

import { SymphonyChartCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutHalfBakedIdeas = builder.inputRef<any>("SymphonyChartCreateRelationWithoutHalfBakedIdeas").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreateWithoutHalfBakedIdeas }),
  }),
});
