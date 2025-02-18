import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";

export const ParallelRealityWhere = builder.inputRef<any>("ParallelRealityWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    AND: t.field({ type: [ParallelRealityWhere], required: false }),
    OR: t.field({ type: [ParallelRealityWhere], required: false }),
    NOT: t.field({ type: [ParallelRealityWhere], required: false }),
  }),
});
