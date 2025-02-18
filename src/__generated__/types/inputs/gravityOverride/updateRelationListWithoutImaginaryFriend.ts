import { builder } from "src/builder";

import { GravityOverrideCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutImaginaryFriend = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutImaginaryFriend] }),
    }),
  });
