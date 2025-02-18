import { builder } from "src/builder";

export const AlternativeFactWhereUnique = builder.inputRef<any>("AlternativeFactWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    singularityReportId: t.field({ type: "ID", required: false }),
  }),
});
