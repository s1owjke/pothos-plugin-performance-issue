import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("ReverseTransactionUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      set: t.field({ type: [ReverseTransactionWhereUnique] }),
      disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutVortexReport] }),
    }),
  });
