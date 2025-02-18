import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { TeleportationFailureUpdateWithoutPortalIndexes } from "./updateWithoutPortalIndexes";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationWithoutPortalIndexes = builder
  .inputRef<any>("TeleportationFailureUpdateRelationWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      disconnect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutPortalIndexes }),
      update: t.field({ type: TeleportationFailureUpdateWithoutPortalIndexes }),
    }),
  });
