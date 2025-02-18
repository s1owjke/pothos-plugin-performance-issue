import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { ReverseTransactionUpdateWithoutSchrodingerUsersToNotify } from "./updateWithoutSchrodingerUsersToNotify";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("ReverseTransactionUpdateRelationWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      disconnect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutSchrodingerUsersToNotify }),
      update: t.field({ type: ReverseTransactionUpdateWithoutSchrodingerUsersToNotify }),
    }),
  });
