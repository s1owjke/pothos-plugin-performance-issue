import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("ImaginaryFriendCreateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutGravityOverrides] }),
    }),
  });
