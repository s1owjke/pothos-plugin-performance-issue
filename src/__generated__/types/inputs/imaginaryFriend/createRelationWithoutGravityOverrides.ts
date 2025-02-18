import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationWithoutGravityOverrides = builder
  .inputRef<any>("ImaginaryFriendCreateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutGravityOverrides }),
    }),
  });
