import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { HypotheticalRevenueOrderBy } from "../hypotheticalRevenue/orderBy";
import { SchrodingerUserOrderBy } from "../schrodingerUser/orderBy";

export const LostAndNeverFoundOrderBy = builder.inputRef<any>("LostAndNeverFoundOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueOrderBy, required: false }),
    hypotheticalRevenueId: t.field({ type: SortOrder, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserOrderBy, required: false }),
    schrodingerUserId: t.field({ type: SortOrder, required: false }),
  }),
});
