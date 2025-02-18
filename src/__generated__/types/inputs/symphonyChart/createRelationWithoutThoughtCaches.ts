import { builder } from "src/builder";

import { SymphonyChartCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationWithoutThoughtCaches = builder.inputRef<any>("SymphonyChartCreateRelationWithoutThoughtCaches").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreateWithoutThoughtCaches }),
  }),
});
