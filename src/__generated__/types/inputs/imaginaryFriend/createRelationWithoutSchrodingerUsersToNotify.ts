import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("ImaginaryFriendCreateRelationWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutSchrodingerUsersToNotify }),
    }),
  });
