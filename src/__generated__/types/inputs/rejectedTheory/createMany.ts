import { builder } from "src/builder";

export const RejectedTheoryCreateMany = builder.inputRef<any>("RejectedTheoryCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    ghostRecordId: t.field({ type: "ID", required: false }),
    parentRejectedTheoryId: t.field({ type: "ID", required: false }),
    thresholdManifestId: t.field({ type: "ID", required: false }),
  }),
});
