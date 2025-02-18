import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("TeleportationFailureCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutSchrodingerUser] }),
    }),
  });
