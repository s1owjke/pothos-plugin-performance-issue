import { builder } from "src/builder";

import { ClassifiedSillinessWhere } from "./where";

export const ClassifiedSillinessWhereRelationList = builder.inputRef<any>("ClassifiedSillinessWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ClassifiedSillinessWhere, required: false }),
    every: t.field({ type: ClassifiedSillinessWhere, required: false }),
    none: t.field({ type: ClassifiedSillinessWhere, required: false }),
  }),
});
