import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      set: t.field({ type: [ImaginaryFriendWhereUnique] }),
      disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutGravityOverrides] }),
    }),
  });
