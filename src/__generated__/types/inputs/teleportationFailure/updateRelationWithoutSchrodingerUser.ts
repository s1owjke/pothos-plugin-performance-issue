import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { TeleportationFailureUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("TeleportationFailureUpdateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      disconnect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutSchrodingerUser }),
      update: t.field({ type: TeleportationFailureUpdateWithoutSchrodingerUser }),
    }),
  });
