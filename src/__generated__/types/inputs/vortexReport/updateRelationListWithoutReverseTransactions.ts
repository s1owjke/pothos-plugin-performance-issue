import { builder } from "src/builder";

import { VortexReportCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutReverseTransactions = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutReverseTransactions] }),
    }),
  });
