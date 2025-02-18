import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { ReverseTransactionUpdateWithoutImaginaryFriend } from "./updateWithoutImaginaryFriend";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationWithoutImaginaryFriend = builder
  .inputRef<any>("ReverseTransactionUpdateRelationWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      disconnect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutImaginaryFriend }),
      update: t.field({ type: ReverseTransactionUpdateWithoutImaginaryFriend }),
    }),
  });
