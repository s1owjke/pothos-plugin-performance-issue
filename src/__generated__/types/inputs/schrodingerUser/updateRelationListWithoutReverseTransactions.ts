import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutReverseTransactions = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutReverseTransactions] }),
    }),
  });
