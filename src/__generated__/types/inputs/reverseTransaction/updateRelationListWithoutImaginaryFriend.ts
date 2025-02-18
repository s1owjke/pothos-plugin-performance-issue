import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationListWithoutImaginaryFriend = builder
  .inputRef<any>("ReverseTransactionUpdateRelationListWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      set: t.field({ type: [ReverseTransactionWhereUnique] }),
      disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutImaginaryFriend] }),
    }),
  });
