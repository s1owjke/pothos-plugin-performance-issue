import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ClassifiedSillinessOrderBy } from "../classifiedSilliness/orderBy";

export const UnfinishedPrototypeOrderBy = builder.inputRef<any>("UnfinishedPrototypeOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    classifiedSilliness: t.field({ type: ClassifiedSillinessOrderBy, required: false }),
    classifiedSillinessId: t.field({ type: SortOrder, required: false }),
  }),
});
