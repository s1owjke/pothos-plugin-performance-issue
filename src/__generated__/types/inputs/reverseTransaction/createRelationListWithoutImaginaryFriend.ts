import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationListWithoutImaginaryFriend = builder
  .inputRef<any>("ReverseTransactionCreateRelationListWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutImaginaryFriend] }),
    }),
  });
