import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationListWithoutReverseTransactions = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationListWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      set: t.field({ type: [ImaginaryFriendWhereUnique] }),
      disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutReverseTransactions] }),
    }),
  });
