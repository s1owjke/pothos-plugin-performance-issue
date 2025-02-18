import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { SchrodingerUserOrderBy } from "../schrodingerUser/orderBy";
import { SingularityReportOrderBy } from "../singularityReport/orderBy";

export const InterdimensionalReceiptOrderBy = builder.inputRef<any>("InterdimensionalReceiptOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserOrderBy, required: false }),
    schrodingerUserId: t.field({ type: SortOrder, required: false }),
    singularityReport: t.field({ type: SingularityReportOrderBy, required: false }),
    singularityReportId: t.field({ type: SortOrder, required: false }),
  }),
});
