import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ImaginaryFriendUpdateWithoutGravityOverrides } from "./updateWithoutGravityOverrides";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutGravityOverrides = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutGravityOverrides }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutGravityOverrides }),
    }),
  });
