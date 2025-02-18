import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";

export const DebuggingHistoryWhere = builder.inputRef<any>("DebuggingHistoryWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [DebuggingHistoryWhere], required: false }),
    OR: t.field({ type: [DebuggingHistoryWhere], required: false }),
    NOT: t.field({ type: [DebuggingHistoryWhere], required: false }),
  }),
});
