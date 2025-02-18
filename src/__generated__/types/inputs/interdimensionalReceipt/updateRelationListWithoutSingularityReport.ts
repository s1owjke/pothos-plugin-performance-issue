import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptUpdateRelationListWithoutSingularityReport = builder
  .inputRef<any>("InterdimensionalReceiptUpdateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      set: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      disconnect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      create: t.field({ type: [InterdimensionalReceiptCreateWithoutSingularityReport] }),
    }),
  });
