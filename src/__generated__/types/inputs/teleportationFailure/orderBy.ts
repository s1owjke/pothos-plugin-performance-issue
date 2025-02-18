import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { SchrodingerUserOrderBy } from "../schrodingerUser/orderBy";
import { VortexReportOrderBy } from "../vortexReport/orderBy";

export const TeleportationFailureOrderBy = builder.inputRef<any>("TeleportationFailureOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserOrderBy, required: false }),
    schrodingerUserId: t.field({ type: SortOrder, required: false }),
    vortexReport: t.field({ type: VortexReportOrderBy, required: false }),
    vortexReportId: t.field({ type: SortOrder, required: false }),
  }),
});
