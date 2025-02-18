import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const EmotionalSupportTableUpdateMany = builder.inputRef<any>("EmotionalSupportTableUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    infiniteScrollLogId: t.field({ type: IdUpdate, required: false }),
    singularityReportId: t.field({ type: IdUpdate, required: false }),
    symphonyChartId: t.field({ type: IdUpdate, required: false }),
  }),
});
