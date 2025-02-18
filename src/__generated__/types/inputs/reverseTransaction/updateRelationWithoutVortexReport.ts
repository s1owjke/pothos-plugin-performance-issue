import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ReverseTransactionUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationWithoutVortexReport = builder
  .inputRef<any>("ReverseTransactionUpdateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      disconnect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutVortexReport }),
      update: t.field({ type: ReverseTransactionUpdateWithoutVortexReport }),
    }),
  });
