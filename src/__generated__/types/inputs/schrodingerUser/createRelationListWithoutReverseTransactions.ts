import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutReverseTransactions = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutReverseTransactions] }),
    }),
  });
