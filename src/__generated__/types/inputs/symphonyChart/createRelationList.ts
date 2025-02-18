import { builder } from "src/builder";

import { SymphonyChartCreate } from "./create";
import { SymphonyChartWhereUnique } from "./whereUnique";

export const SymphonyChartCreateRelationList = builder.inputRef<any>("SymphonyChartCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SymphonyChartWhereUnique] }),
    create: t.field({ type: [SymphonyChartCreate] }),
  }),
});
