import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const AlternativeFactUpdateMany = builder.inputRef<any>("AlternativeFactUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    glitchRegistryId: t.field({ type: IdUpdate, required: false }),
    singularityReportId: t.field({ type: IdUpdate, required: false }),
    symphonyChartId: t.field({ type: IdUpdate, required: false }),
  }),
});
