import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptCreateRelationListWithoutSingularityReport = builder
  .inputRef<any>("InterdimensionalReceiptCreateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      create: t.field({ type: [InterdimensionalReceiptCreateWithoutSingularityReport] }),
    }),
  });
