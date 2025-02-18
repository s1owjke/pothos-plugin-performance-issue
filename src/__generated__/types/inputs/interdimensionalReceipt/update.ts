import { builder } from "src/builder";

import { SchrodingerUserUpdateRelationWithoutInterdimensionalReceipts } from "../schrodingerUser/updateRelationWithoutInterdimensionalReceipts";
import { SingularityReportUpdateRelationWithoutInterdimensionalReceipts } from "../singularityReport/updateRelationWithoutInterdimensionalReceipts";

export const InterdimensionalReceiptUpdate = builder.inputRef<any>("InterdimensionalReceiptUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutInterdimensionalReceipts,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportUpdateRelationWithoutInterdimensionalReceipts,
      required: false,
    }),
  }),
});
