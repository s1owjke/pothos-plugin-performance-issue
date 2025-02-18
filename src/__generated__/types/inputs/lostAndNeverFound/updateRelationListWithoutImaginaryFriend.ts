import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelationListWithoutImaginaryFriend = builder
  .inputRef<any>("LostAndNeverFoundUpdateRelationListWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      set: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      disconnect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      create: t.field({ type: [LostAndNeverFoundCreateWithoutImaginaryFriend] }),
    }),
  });
