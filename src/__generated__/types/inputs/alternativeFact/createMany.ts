import { builder } from "src/builder";

export const AlternativeFactCreateMany = builder.inputRef<any>("AlternativeFactCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistryId: t.field({ type: "ID", required: false }),
    singularityReportId: t.field({ type: "ID", required: true }),
    symphonyChartId: t.field({ type: "ID", required: true }),
  }),
});
