import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationListWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("ReverseTransactionUpdateRelationListWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      set: t.field({ type: [ReverseTransactionWhereUnique] }),
      disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutSchrodingerUsersToNotify] }),
    }),
  });
