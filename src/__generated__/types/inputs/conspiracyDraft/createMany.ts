import { builder } from "src/builder";

export const ConspiracyDraftCreateMany = builder.inputRef<any>("ConspiracyDraftCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistryId: t.field({ type: "ID", required: false }),
    hypotheticalRevenueId: t.field({ type: "ID", required: false }),
    thresholdManifestId: t.field({ type: "ID", required: false }),
    vortexReportId: t.field({ type: "ID", required: false }),
  }),
});
