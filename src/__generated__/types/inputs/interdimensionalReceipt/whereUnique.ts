import { builder } from "src/builder";

const InterdimensionalReceiptCompoundSingularityReportIdSchrodingerUserId = builder
  .inputRef<any>("InterdimensionalReceiptCompoundSingularityReportIdSchrodingerUserId")
  .implement({
    fields: (t) => ({
      singularityReportId: t.field({ type: "ID", required: true }),
      schrodingerUserId: t.field({ type: "ID", required: true }),
    }),
  });

export const InterdimensionalReceiptWhereUnique = builder.inputRef<any>("InterdimensionalReceiptWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    singularityReportId_schrodingerUserId: t.field({
      type: InterdimensionalReceiptCompoundSingularityReportIdSchrodingerUserId,
      required: false,
    }),
  }),
});
