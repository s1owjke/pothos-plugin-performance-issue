import { builder } from "src/builder";

import { GravityOverrideCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { GravityOverrideUpdateWithoutImaginaryFriend } from "./updateWithoutImaginaryFriend";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutImaginaryFriend = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutImaginaryFriend }),
      update: t.field({ type: GravityOverrideUpdateWithoutImaginaryFriend }),
    }),
  });
