import { builder } from "src/builder";

export const SingularityReportWhereUnique = builder.inputRef<any>("SingularityReportWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
