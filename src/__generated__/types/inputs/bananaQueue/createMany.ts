import { builder } from "src/builder";

export const BananaQueueCreateMany = builder.inputRef<any>("BananaQueueCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    singularityReportId: t.field({ type: "ID", required: true }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
