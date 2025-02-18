import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const ConspiracyDraftUpdateMany = builder.inputRef<any>("ConspiracyDraftUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    glitchRegistryId: t.field({ type: IdUpdate, required: false }),
    hypotheticalRevenueId: t.field({ type: IdUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
    vortexReportId: t.field({ type: IdUpdate, required: false }),
  }),
});
