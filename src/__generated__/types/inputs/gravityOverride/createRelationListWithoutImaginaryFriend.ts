import { builder } from "src/builder";

import { GravityOverrideCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutImaginaryFriend = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutImaginaryFriend] }),
    }),
  });
