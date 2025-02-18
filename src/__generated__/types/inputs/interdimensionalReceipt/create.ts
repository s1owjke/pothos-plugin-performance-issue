import { builder } from "src/builder";

import { SchrodingerUserCreateRelationWithoutInterdimensionalReceipts } from "../schrodingerUser/createRelationWithoutInterdimensionalReceipts";
import { SingularityReportCreateRelationWithoutInterdimensionalReceipts } from "../singularityReport/createRelationWithoutInterdimensionalReceipts";

export const InterdimensionalReceiptCreate = builder.inputRef<any>("InterdimensionalReceiptCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutInterdimensionalReceipts,
      required: true,
    }),
    singularityReport: t.field({
      type: SingularityReportCreateRelationWithoutInterdimensionalReceipts,
      required: true,
    }),
  }),
});
