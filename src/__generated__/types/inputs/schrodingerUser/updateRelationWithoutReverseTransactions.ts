import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { SchrodingerUserUpdateWithoutReverseTransactions } from "./updateWithoutReverseTransactions";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutReverseTransactions = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutReverseTransactions }),
      update: t.field({ type: SchrodingerUserUpdateWithoutReverseTransactions }),
    }),
  });
