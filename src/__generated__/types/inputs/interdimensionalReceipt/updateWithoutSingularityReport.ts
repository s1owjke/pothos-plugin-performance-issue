import { builder } from "src/builder";

import { SchrodingerUserUpdateRelationWithoutInterdimensionalReceipts } from "../schrodingerUser/updateRelationWithoutInterdimensionalReceipts";

export const InterdimensionalReceiptUpdateWithoutSingularityReport = builder
  .inputRef<any>("InterdimensionalReceiptUpdateWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      schrodingerUser: t.field({
        type: SchrodingerUserUpdateRelationWithoutInterdimensionalReceipts,
        required: false,
      }),
    }),
  });
