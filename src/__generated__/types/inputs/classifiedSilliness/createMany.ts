import { builder } from "src/builder";

export const ClassifiedSillinessCreateMany = builder.inputRef<any>("ClassifiedSillinessCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    ghostRecordId: t.field({ type: "ID", required: false }),
    portalIndexId: t.field({ type: "ID", required: false }),
    symphonyChartId: t.field({ type: "ID", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: true }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
