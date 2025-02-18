import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { UnassignedDestinyUpdateWithoutImaginaryFriend } from "./updateWithoutImaginaryFriend";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyUpdateRelationWithoutImaginaryFriend = builder
  .inputRef<any>("UnassignedDestinyUpdateRelationWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnassignedDestinyWhereUnique }),
      disconnect: t.field({ type: UnassignedDestinyWhereUnique }),
      create: t.field({ type: UnassignedDestinyCreateWithoutImaginaryFriend }),
      update: t.field({ type: UnassignedDestinyUpdateWithoutImaginaryFriend }),
    }),
  });
