import { builder } from "src/builder";

export const SymphonyChartCreateMany = builder.inputRef<any>("SymphonyChartCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    ghostRecordId: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
