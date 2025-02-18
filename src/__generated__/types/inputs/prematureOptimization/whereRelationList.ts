import { builder } from "src/builder";

import { PrematureOptimizationWhere } from "./where";

export const PrematureOptimizationWhereRelationList = builder.inputRef<any>("PrematureOptimizationWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: PrematureOptimizationWhere, required: false }),
    every: t.field({ type: PrematureOptimizationWhere, required: false }),
    none: t.field({ type: PrematureOptimizationWhere, required: false }),
  }),
});
