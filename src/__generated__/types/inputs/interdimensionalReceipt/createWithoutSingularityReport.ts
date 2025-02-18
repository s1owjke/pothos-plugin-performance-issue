import { builder } from "src/builder";

import { SchrodingerUserCreateRelationWithoutInterdimensionalReceipts } from "../schrodingerUser/createRelationWithoutInterdimensionalReceipts";

export const InterdimensionalReceiptCreateWithoutSingularityReport = builder
  .inputRef<any>("InterdimensionalReceiptCreateWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      schrodingerUser: t.field({
        type: SchrodingerUserCreateRelationWithoutInterdimensionalReceipts,
        required: true,
      }),
    }),
  });
