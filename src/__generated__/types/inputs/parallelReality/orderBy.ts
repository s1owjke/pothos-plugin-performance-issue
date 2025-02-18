import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";

export const ParallelRealityOrderBy = builder.inputRef<any>("ParallelRealityOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
  }),
});
