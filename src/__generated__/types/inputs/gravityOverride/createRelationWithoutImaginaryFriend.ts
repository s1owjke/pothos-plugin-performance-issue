import { builder } from "src/builder";

import { GravityOverrideCreateWithoutImaginaryFriend } from "./createWithoutImaginaryFriend";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutImaginaryFriend = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutImaginaryFriend")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutImaginaryFriend }),
    }),
  });
