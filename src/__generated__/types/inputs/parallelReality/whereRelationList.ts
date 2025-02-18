import { builder } from "src/builder";

import { ParallelRealityWhere } from "./where";

export const ParallelRealityWhereRelationList = builder.inputRef<any>("ParallelRealityWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ParallelRealityWhere, required: false }),
    every: t.field({ type: ParallelRealityWhere, required: false }),
    none: t.field({ type: ParallelRealityWhere, required: false }),
  }),
});
