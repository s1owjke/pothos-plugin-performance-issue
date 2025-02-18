import { builder } from "src/builder";

import { SymphonyChartCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationListWithoutThoughtCaches = builder
  .inputRef<any>("SymphonyChartCreateRelationListWithoutThoughtCaches")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SymphonyChartWhereUnique] }),
      create: t.field({ type: [SymphonyChartCreateWithoutThoughtCaches] }),
    }),
  });
