import { builder } from "src/builder";

import { HalfBakedIdeaWhere } from "./where";

export const HalfBakedIdeaWhereRelationList = builder.inputRef<any>("HalfBakedIdeaWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: HalfBakedIdeaWhere, required: false }),
    every: t.field({ type: HalfBakedIdeaWhere, required: false }),
    none: t.field({ type: HalfBakedIdeaWhere, required: false }),
  }),
});
