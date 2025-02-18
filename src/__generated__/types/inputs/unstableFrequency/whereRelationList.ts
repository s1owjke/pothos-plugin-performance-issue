import { builder } from "src/builder";

import { UnstableFrequencyWhere } from "./where";

export const UnstableFrequencyWhereRelationList = builder.inputRef<any>("UnstableFrequencyWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: UnstableFrequencyWhere, required: false }),
    every: t.field({ type: UnstableFrequencyWhere, required: false }),
    none: t.field({ type: UnstableFrequencyWhere, required: false }),
  }),
});
