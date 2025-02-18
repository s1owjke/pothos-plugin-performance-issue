import { builder } from "src/builder";

export const DimensionalBackupCreateMany = builder.inputRef<any>("DimensionalBackupCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: true }),
  }),
});
