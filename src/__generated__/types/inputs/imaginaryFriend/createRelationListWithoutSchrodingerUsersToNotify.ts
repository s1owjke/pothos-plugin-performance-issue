import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationListWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("ImaginaryFriendCreateRelationListWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutSchrodingerUsersToNotify] }),
    }),
  });
