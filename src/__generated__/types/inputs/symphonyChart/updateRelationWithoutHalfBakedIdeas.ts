import { builder } from "src/builder";

import { SymphonyChartCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { SymphonyChartUpdateWithoutHalfBakedIdeas } from "./updateWithoutHalfBakedIdeas";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutHalfBakedIdeas = builder.inputRef<any>("SymphonyChartUpdateRelationWithoutHalfBakedIdeas").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    disconnect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreateWithoutHalfBakedIdeas }),
    update: t.field({ type: SymphonyChartUpdateWithoutHalfBakedIdeas }),
  }),
});
