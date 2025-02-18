import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutReverseTransactions } from "./createWithoutReverseTransactions";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationWithoutReverseTransactions = builder
  .inputRef<any>("ImaginaryFriendCreateRelationWithoutReverseTransactions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutReverseTransactions }),
    }),
  });
