import { builder } from "src/builder";

import { MissingContextWhere } from "./where";

export const MissingContextWhereRelationList = builder.inputRef<any>("MissingContextWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: MissingContextWhere, required: false }),
    every: t.field({ type: MissingContextWhere, required: false }),
    none: t.field({ type: MissingContextWhere, required: false }),
  }),
});
