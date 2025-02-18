import { builder } from "src/builder";

export const PendingDisasterCreateMany = builder.inputRef<any>("PendingDisasterCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    emotionalSupportTableId: t.field({ type: "ID", required: false }),
    glitchRegistryId: t.field({ type: "ID", required: false }),
    thresholdManifestId: t.field({ type: "ID", required: false }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
