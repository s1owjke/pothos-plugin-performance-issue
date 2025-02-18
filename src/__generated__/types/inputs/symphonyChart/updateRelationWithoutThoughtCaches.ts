import { builder } from "src/builder";

import { SymphonyChartCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SymphonyChartUpdateWithoutThoughtCaches } from "./updateWithoutThoughtCaches";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationWithoutThoughtCaches = builder.inputRef<any>("SymphonyChartUpdateRelationWithoutThoughtCaches").implement({
  fields: (t) => ({
    connect: t.field({ type: SymphonyChartWhereUnique }),
    disconnect: t.field({ type: SymphonyChartWhereUnique }),
    create: t.field({ type: SymphonyChartCreateWithoutThoughtCaches }),
    update: t.field({ type: SymphonyChartUpdateWithoutThoughtCaches }),
  }),
});
