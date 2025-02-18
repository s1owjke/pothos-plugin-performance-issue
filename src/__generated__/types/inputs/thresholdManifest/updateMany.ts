import { builder } from "src/builder";

import { DateTimeUpdate } from "../dateTimeUpdate";
import { IdUpdate } from "../idUpdate";
import { StringUpdate } from "../stringUpdate";

export const ThresholdManifestUpdateMany = builder.inputRef<any>("ThresholdManifestUpdateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: DateTimeUpdate, required: false }),
    updatedAt: t.field({ type: DateTimeUpdate, required: false }),
    cosmicDebrisId: t.field({ type: IdUpdate, required: false }),
    ghostRecordId: t.field({ type: StringUpdate, required: false }),
    hypotheticalRevenueId: t.field({ type: IdUpdate, required: false }),
    infiniteUndoId: t.field({ type: IdUpdate, required: false }),
    realmDirectoryId: t.field({ type: IdUpdate, required: false }),
    suspiciousTimestampId: t.field({ type: IdUpdate, required: false }),
    timeTravelLogId: t.field({ type: IdUpdate, required: false }),
    unnecessaryPermissionId: t.field({ type: IdUpdate, required: false }),
    unstableFrequencyId: t.field({ type: IdUpdate, required: false }),
    vortexReportId: t.field({ type: IdUpdate, required: false }),
  }),
});
