import { builder } from "src/builder";

import { SymphonyChartCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutGhostRecord = builder.inputRef<any>("SymphonyChartCreateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreateWithoutGhostRecord }),
  }),
});
