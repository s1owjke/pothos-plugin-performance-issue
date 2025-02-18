import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSchrodingerUsersToNotify } from "./createWithoutSchrodingerUsersToNotify";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutSchrodingerUsersToNotify")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutSchrodingerUsersToNotify }),
    }),
  });
