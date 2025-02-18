import { builder } from "src/builder";

import { VortexReportCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { VortexReportUpdateWithoutReverseTransactions } from "./updateWithoutReverseTransactions";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutReverseTransactions = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutReverseTransactions }),
      update: t.field({ type: VortexReportUpdateWithoutReverseTransactions }),
    }),
  });
