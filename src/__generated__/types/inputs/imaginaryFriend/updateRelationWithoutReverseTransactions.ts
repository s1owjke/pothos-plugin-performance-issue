import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { ImaginaryFriendUpdateWithoutReverseTransactions } from "./updateWithoutReverseTransactions";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutReverseTransactions = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutReverseTransactions }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutReverseTransactions }),
    }),
  });
