import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptCreateRelationWithoutSingularityReport = builder
  .inputRef<any>("InterdimensionalReceiptCreateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InterdimensionalReceiptWhereUnique }),
      create: t.field({ type: InterdimensionalReceiptCreateWithoutSingularityReport }),
    }),
  });
