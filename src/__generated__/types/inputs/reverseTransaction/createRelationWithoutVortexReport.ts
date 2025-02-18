import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationWithoutVortexReport = builder
  .inputRef<any>("ReverseTransactionCreateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutVortexReport }),
    }),
  });
