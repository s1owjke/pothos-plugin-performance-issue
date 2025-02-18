import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const InterdimensionalReceiptUpdateMany = builder.inputRef<any>("InterdimensionalReceiptUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    schrodingerUserId: t.field({ type: IdUpdate, required: false }),
    singularityReportId: t.field({ type: IdUpdate, required: false }),
  }),
});
