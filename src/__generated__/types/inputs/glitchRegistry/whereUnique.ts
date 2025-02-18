import { builder } from "src/builder";

export const GlitchRegistryWhereUnique = builder.inputRef<any>("GlitchRegistryWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    singularityReportId: t.field({ type: "ID", required: false }),
  }),
});
