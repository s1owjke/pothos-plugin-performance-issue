import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { GravityOverrideUpdateWithoutSchrodingerUsersToNotify } from "./updateWithoutSchrodingerUsersToNotify";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutSchrodingerUsersToNotify }),
      update: t.field({ type: GravityOverrideUpdateWithoutSchrodingerUsersToNotify }),
    }),
  });
