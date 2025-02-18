import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { LostAndNeverFoundUpdateWithoutImaginaryFriend } from "./updateWithoutImaginaryFriend";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelationWithoutImaginaryFriend = builder
  .inputRef<any>("LostAndNeverFoundUpdateRelationWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: LostAndNeverFoundWhereUnique }),
      disconnect: t.field({ type: LostAndNeverFoundWhereUnique }),
      create: t.field({ type: LostAndNeverFoundCreateWithoutImaginaryFriend }),
      update: t.field({ type: LostAndNeverFoundUpdateWithoutImaginaryFriend }),
    }),
  });
