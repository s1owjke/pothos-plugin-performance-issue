import { builder } from "src/builder";

export const GlitchRegistryCreateMany = builder.inputRef<any>("GlitchRegistryCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    overwrittenLegacyId: t.field({ type: "ID", required: false }),
    singularityReportId: t.field({ type: "ID", required: true }),
    symphonyChartId: t.field({ type: "ID", required: true }),
    verifierStaffId: t.field({ type: "ID", required: true }),
  }),
});
