import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const UnfinishedSymphonyOrderBy = builder.inputRef<any>("UnfinishedSymphonyOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
