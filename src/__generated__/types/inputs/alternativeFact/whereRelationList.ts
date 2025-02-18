import { builder } from "src/builder";

import { AlternativeFactWhere } from "./where";

export const AlternativeFactWhereRelationList = builder.inputRef<any>("AlternativeFactWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: AlternativeFactWhere, required: false }),
    every: t.field({ type: AlternativeFactWhere, required: false }),
    none: t.field({ type: AlternativeFactWhere, required: false }),
  }),
});
