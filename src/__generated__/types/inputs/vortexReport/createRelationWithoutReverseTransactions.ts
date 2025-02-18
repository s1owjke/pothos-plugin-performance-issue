import { builder } from "src/builder";

import { VortexReportCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutReverseTransactions = builder
  .inputRef<any>("VortexReportCreateRelationWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutReverseTransactions }),
    }),
  });
