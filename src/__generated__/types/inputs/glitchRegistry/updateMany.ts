import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const GlitchRegistryUpdateMany = builder.inputRef<any>("GlitchRegistryUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    overwrittenLegacyId: t.field({ type: IdUpdate, required: false }),
    singularityReportId: t.field({ type: IdUpdate, required: false }),
    symphonyChartId: t.field({ type: IdUpdate, required: false }),
    verifierStaffId: t.field({ type: IdUpdate, required: false }),
  }),
});
