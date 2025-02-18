import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";

export const UnstableFrequencyOrderBy = builder.inputRef<any>("UnstableFrequencyOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
  }),
});
