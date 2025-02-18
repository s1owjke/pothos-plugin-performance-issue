import { builder } from "src/builder";

export const SingularityReportCreateMany = builder.inputRef<any>("SingularityReportCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
