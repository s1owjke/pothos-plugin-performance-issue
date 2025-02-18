import { builder } from "src/builder";

export const InterdimensionalReceiptCreateMany = builder.inputRef<any>("InterdimensionalReceiptCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
    singularityReportId: t.field({ type: "ID", required: true }),
  }),
});
