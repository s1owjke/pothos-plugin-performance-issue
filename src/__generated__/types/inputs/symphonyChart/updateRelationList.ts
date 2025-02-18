import { builder } from "src/builder";

import { SymphonyChartCreate } from "./create";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartUpdateRelationList = builder.inputRef<any>("SymphonyChartUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SymphonyChartWhereUnique] }),
    set: t.field({ type: [SymphonyChartWhereUnique] }),
    disconnect: t.field({ type: [SymphonyChartWhereUnique] }),
    create: t.field({ type: [SymphonyChartCreate] }),
  }),
});
