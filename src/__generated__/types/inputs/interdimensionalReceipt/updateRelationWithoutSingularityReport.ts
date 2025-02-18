import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { InterdimensionalReceiptUpdateWithoutSingularityReport } from "./updateWithoutSingularityReport";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptUpdateRelationWithoutSingularityReport = builder
  .inputRef<any>("InterdimensionalReceiptUpdateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InterdimensionalReceiptWhereUnique }),
      disconnect: t.field({ type: InterdimensionalReceiptWhereUnique }),
      create: t.field({ type: InterdimensionalReceiptCreateWithoutSingularityReport }),
      update: t.field({ type: InterdimensionalReceiptUpdateWithoutSingularityReport }),
    }),
  });
