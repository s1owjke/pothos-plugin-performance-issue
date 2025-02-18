import { builder } from "src/builder";

export const EmotionalSupportTableCreateMany = builder.inputRef<any>("EmotionalSupportTableCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    infiniteScrollLogId: t.field({ type: "ID", required: true }),
    singularityReportId: t.field({ type: "ID", required: true }),
    symphonyChartId: t.field({ type: "ID", required: true }),
  }),
});
