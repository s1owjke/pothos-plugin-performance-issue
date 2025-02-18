import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("TeleportationFailureUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      set: t.field({ type: [TeleportationFailureWhereUnique] }),
      disconnect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutSchrodingerUser] }),
    }),
  });
