import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { ImaginaryFriendUpdateWithoutSchrodingerUsersToNotify } from "./updateWithoutSchrodingerUsersToNotify";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutSchrodingerUsersToNotify }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutSchrodingerUsersToNotify }),
    }),
  });
