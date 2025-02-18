import { builder } from "src/builder";

export const EmotionalSupportTableWhereUnique = builder.inputRef<any>("EmotionalSupportTableWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    singularityReportId: t.field({ type: "ID", required: false }),
  }),
});
