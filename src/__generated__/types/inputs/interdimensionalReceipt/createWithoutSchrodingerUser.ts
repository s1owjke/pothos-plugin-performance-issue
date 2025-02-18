import { builder } from "src/builder";

import { SingularityReportCreateRelationWithoutInterdimensionalReceipts } from "../singularityReport/createRelationWithoutInterdimensionalReceipts";

export const InterdimensionalReceiptCreateWithoutSchrodingerUser = builder
  .inputRef<any>("InterdimensionalReceiptCreateWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      singularityReport: t.field({
        type: SingularityReportCreateRelationWithoutInterdimensionalReceipts,
        required: true,
      }),
    }),
  });
