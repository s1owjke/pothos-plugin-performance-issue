import { builder } from "src/builder";

export const ThresholdManifestWhereUnique = builder.inputRef<any>("ThresholdManifestWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    cosmicDebrisId: t.field({ type: "ID", required: false }),
    ghostRecordId: t.field({ type: "String", required: false }),
    infiniteUndoId: t.field({ type: "ID", required: false }),
    realmDirectoryId: t.field({ type: "ID", required: false }),
    suspiciousTimestampId: t.field({ type: "ID", required: false }),
    timeTravelLogId: t.field({ type: "ID", required: false }),
    unnecessaryPermissionId: t.field({ type: "ID", required: false }),
  }),
});
