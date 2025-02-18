import { builder } from "src/builder";

import { TeleportationFailureCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationWithoutPortalIndexes = builder
  .inputRef<any>("TeleportationFailureCreateRelationWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TeleportationFailureWhereUnique }),
      create: t.field({ type: TeleportationFailureCreateWithoutPortalIndexes }),
    }),
  });
