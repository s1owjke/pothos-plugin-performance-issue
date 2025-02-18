import { builder } from "src/builder";

import { TimeTravelLogWhere } from "./where";

export const TimeTravelLogWhereRelationList = builder.inputRef<any>("TimeTravelLogWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: TimeTravelLogWhere, required: false }),
    every: t.field({ type: TimeTravelLogWhere, required: false }),
    none: t.field({ type: TimeTravelLogWhere, required: false }),
  }),
});
