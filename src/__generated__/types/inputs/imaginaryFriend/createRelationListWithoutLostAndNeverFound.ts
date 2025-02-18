import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutLostAndNeverFound } from "./createWithoutLostAndNeverFound";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationListWithoutLostAndNeverFound = builder
  .inputRef<any>("ImaginaryFriendCreateRelationListWithoutLostAndNeverFound")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutLostAndNeverFound] }),
    }),
  });
