import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationListWithoutReverseTransactions = builder
  .inputRef<any>("ImaginaryFriendCreateRelationListWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutReverseTransactions] }),
    }),
  });
