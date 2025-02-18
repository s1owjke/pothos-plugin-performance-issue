import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { SchrodingerUserWhere } from "../schrodingerUser/where";
import { SingularityReportWhere } from "../singularityReport/where";

export const InterdimensionalReceiptWhere = builder.inputRef<any>("InterdimensionalReceiptWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    singularityReport: t.field({ type: SingularityReportWhere, required: false }),
    singularityReportId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [InterdimensionalReceiptWhere], required: false }),
    OR: t.field({ type: [InterdimensionalReceiptWhere], required: false }),
    NOT: t.field({ type: [InterdimensionalReceiptWhere], required: false }),
  }),
});
