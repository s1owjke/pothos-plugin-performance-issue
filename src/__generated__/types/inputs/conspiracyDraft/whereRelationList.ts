import { builder } from "src/builder";

import { ConspiracyDraftWhere } from "./where";

export const ConspiracyDraftWhereRelationList = builder.inputRef<any>("ConspiracyDraftWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ConspiracyDraftWhere, required: false }),
    every: t.field({ type: ConspiracyDraftWhere, required: false }),
    none: t.field({ type: ConspiracyDraftWhere, required: false }),
  }),
});
