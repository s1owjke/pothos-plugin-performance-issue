import { builder } from "src/builder";

import { RedundantDuplicationWhere } from "./where";

export const RedundantDuplicationWhereRelationList = builder.inputRef<any>("RedundantDuplicationWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: RedundantDuplicationWhere, required: false }),
    every: t.field({ type: RedundantDuplicationWhere, required: false }),
    none: t.field({ type: RedundantDuplicationWhere, required: false }),
  }),
});
