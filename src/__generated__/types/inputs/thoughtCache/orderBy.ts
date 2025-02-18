import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { SchrodingerUserOrderBy } from "../schrodingerUser/orderBy";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";

export const ThoughtCacheOrderBy = builder.inputRef<any>("ThoughtCacheOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserOrderBy, required: false }),
    schrodingerUserId: t.field({ type: SortOrder, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    symphonyChartId: t.field({ type: SortOrder, required: false }),
  }),
});
