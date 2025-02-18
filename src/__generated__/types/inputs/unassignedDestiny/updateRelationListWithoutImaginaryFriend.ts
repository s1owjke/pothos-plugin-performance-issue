import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyUpdateRelationListWithoutImaginaryFriend = builder
  .inputRef<any>("UnassignedDestinyUpdateRelationListWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      set: t.field({ type: [UnassignedDestinyWhereUnique] }),
      disconnect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      create: t.field({ type: [UnassignedDestinyCreateWithoutImaginaryFriend] }),
    }),
  });
