import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";

export const ClassifiedSillinessUpdateMany = builder.inputRef<any>("ClassifiedSillinessUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    ghostRecordId: t.field({ type: IdUpdate, required: false }),
    portalIndexId: t.field({ type: IdUpdate, required: false }),
    symphonyChartId: t.field({ type: IdUpdate, required: false }),
    thresholdManifestId: t.field({ type: IdUpdate, required: false }),
    unstableFrequencyId: t.field({ type: IdUpdate, required: false }),
  }),
});
