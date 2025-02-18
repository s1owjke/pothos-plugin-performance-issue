import { builder } from "src/builder";

import { SymphonyChartCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SymphonyChartUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutGhostRecord = builder.inputRef<any>("SymphonyChartUpdateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    disconnect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreateWithoutGhostRecord }),
    update: t.field({ type: SymphonyChartUpdateWithoutGhostRecord }),
  }),
});
