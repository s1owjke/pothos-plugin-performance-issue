import { builder } from "src/builder";

import { VortexReportCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutReverseTransactions = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutReverseTransactions] }),
    }),
  });
