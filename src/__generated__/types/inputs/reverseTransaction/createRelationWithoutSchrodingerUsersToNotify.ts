import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("ReverseTransactionCreateRelationWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutSchrodingerUsersToNotify }),
    }),
  });
