import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationListWithoutVortexReport = builder
  .inputRef<any>("ReverseTransactionCreateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutVortexReport] }),
    }),
  });
