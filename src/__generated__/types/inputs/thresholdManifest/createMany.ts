import { builder } from "src/builder";

export const ThresholdManifestCreateMany = builder.inputRef<any>("ThresholdManifestCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    cosmicDebrisId: t.field({ type: "ID", required: false }),
    ghostRecordId: t.field({ type: "String", required: false }),
    hypotheticalRevenueId: t.field({ type: "ID", required: false }),
    infiniteUndoId: t.field({ type: "ID", required: false }),
    realmDirectoryId: t.field({ type: "ID", required: false }),
    suspiciousTimestampId: t.field({ type: "ID", required: false }),
    timeTravelLogId: t.field({ type: "ID", required: false }),
    unnecessaryPermissionId: t.field({ type: "ID", required: false }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
    vortexReportId: t.field({ type: "ID", required: false }),
  }),
});
