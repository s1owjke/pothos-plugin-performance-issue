import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutLostAndNeverFound } from "./createWithoutLostAndNeverFound";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationListWithoutLostAndNeverFound = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationListWithoutLostAndNeverFound")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      set: t.field({ type: [ImaginaryFriendWhereUnique] }),
      disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutLostAndNeverFound] }),
    }),
  });
