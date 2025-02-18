import { builder } from "src/builder";

import { OverdueRevolutionWhere } from "./where";

export const OverdueRevolutionWhereRelationList = builder.inputRef<any>("OverdueRevolutionWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: OverdueRevolutionWhere, required: false }),
    every: t.field({ type: OverdueRevolutionWhere, required: false }),
    none: t.field({ type: OverdueRevolutionWhere, required: false }),
  }),
});
