import { builder } from "src/builder";

import { DebuggingHistoryWhere } from "./where";

export const DebuggingHistoryWhereRelationList = builder.inputRef<any>("DebuggingHistoryWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: DebuggingHistoryWhere, required: false }),
    every: t.field({ type: DebuggingHistoryWhere, required: false }),
    none: t.field({ type: DebuggingHistoryWhere, required: false }),
  }),
});
