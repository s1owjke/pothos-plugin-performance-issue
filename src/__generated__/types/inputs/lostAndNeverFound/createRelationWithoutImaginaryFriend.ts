import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundCreateRelationWithoutImaginaryFriend = builder
  .inputRef<any>("LostAndNeverFoundCreateRelationWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: LostAndNeverFoundWhereUnique }),
      create: t.field({ type: LostAndNeverFoundCreateWithoutImaginaryFriend }),
    }),
  });
