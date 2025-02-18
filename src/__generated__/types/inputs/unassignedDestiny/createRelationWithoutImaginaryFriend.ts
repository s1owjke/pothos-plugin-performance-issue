import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyCreateRelationWithoutImaginaryFriend = builder
  .inputRef<any>("UnassignedDestinyCreateRelationWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnassignedDestinyWhereUnique }),
      create: t.field({ type: UnassignedDestinyCreateWithoutImaginaryFriend }),
    }),
  });
