import { builder } from "src/builder";

import { SingularityReportUpdateRelationWithoutInterdimensionalReceipts } from "../singularityReport/updateRelationWithoutInterdimensionalReceipts";

export const InterdimensionalReceiptUpdateWithoutSchrodingerUser = builder
  .inputRef<any>("InterdimensionalReceiptUpdateWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      singularityReport: t.field({
        type: SingularityReportUpdateRelationWithoutInterdimensionalReceipts,
        required: false,
      }),
    }),
  });
