import { builder } from "src/builder";

import { SpontaneousCombustionWhere } from "./where";

export const SpontaneousCombustionWhereRelationList = builder.inputRef<any>("SpontaneousCombustionWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SpontaneousCombustionWhere, required: false }),
    every: t.field({ type: SpontaneousCombustionWhere, required: false }),
    none: t.field({ type: SpontaneousCombustionWhere, required: false }),
  }),
});
