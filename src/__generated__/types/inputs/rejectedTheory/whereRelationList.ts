import { builder } from "src/builder";

import { RejectedTheoryWhere } from "./where";

export const RejectedTheoryWhereRelationList = builder.inputRef<any>("RejectedTheoryWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: RejectedTheoryWhere, required: false }),
    every: t.field({ type: RejectedTheoryWhere, required: false }),
    none: t.field({ type: RejectedTheoryWhere, required: false }),
  }),
});
