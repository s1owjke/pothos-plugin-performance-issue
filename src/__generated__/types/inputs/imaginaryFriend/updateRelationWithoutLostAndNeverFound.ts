import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutLostAndNeverFound } from "./createWithoutLostAndNeverFound";
import { ImaginaryFriendUpdateWithoutLostAndNeverFound } from "./updateWithoutLostAndNeverFound";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutLostAndNeverFound = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutLostAndNeverFound")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutLostAndNeverFound }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutLostAndNeverFound }),
    }),
  });
