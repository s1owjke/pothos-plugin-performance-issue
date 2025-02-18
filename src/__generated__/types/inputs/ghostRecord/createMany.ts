import { builder } from "src/builder";

export const GhostRecordCreateMany = builder.inputRef<any>("GhostRecordCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: false }),
  }),
});
