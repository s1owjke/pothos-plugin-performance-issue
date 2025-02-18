import { builder } from "src/builder";

export const VortexReportWhereUnique = builder.inputRef<any>("VortexReportWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    cosmicDebrisId: t.field({ type: "ID", required: false }),
    infiniteUndoId: t.field({ type: "ID", required: false }),
    realmDirectoryId: t.field({ type: "ID", required: false }),
    suspiciousTimestampId: t.field({ type: "ID", required: false }),
    timeTravelLogId: t.field({ type: "ID", required: false }),
    unnecessaryPermissionId: t.field({ type: "ID", required: false }),
  }),
});
