import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationListWithoutPortalIndexes = builder
  .inputRef<any>("TeleportationFailureUpdateRelationListWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TeleportationFailureWhereUnique] }),
      set: t.field({ type: [TeleportationFailureWhereUnique] }),
      disconnect: t.field({ type: [TeleportationFailureWhereUnique] }),
      create: t.field({ type: [TeleportationFailureCreateWithoutPortalIndexes] }),
    }),
  });
