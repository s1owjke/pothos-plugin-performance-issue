import { builder } from "src/builder";

import { SymphonyChartWhere } from "./where";

export const SymphonyChartWhereRelationList = builder.inputRef<any>("SymphonyChartWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SymphonyChartWhere, required: false }),
    every: t.field({ type: SymphonyChartWhere, required: false }),
    none: t.field({ type: SymphonyChartWhere, required: false }),
  }),
});
