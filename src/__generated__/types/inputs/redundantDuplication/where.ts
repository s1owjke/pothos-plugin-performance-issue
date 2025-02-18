import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";

export const RedundantDuplicationWhere = builder.inputRef<any>("RedundantDuplicationWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    AND: t.field({ type: [RedundantDuplicationWhere], required: false }),
    OR: t.field({ type: [RedundantDuplicationWhere], required: false }),
    NOT: t.field({ type: [RedundantDuplicationWhere], required: false }),
  }),
});
