import { builder } from "src/builder";

import { PortalIndexCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { PortalIndexUpdateWithoutTeleportationFailures } from "./updateWithoutTeleportationFailures";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationWithoutTeleportationFailures = builder
  .inputRef<any>("PortalIndexUpdateRelationWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PortalIndexWhereUnique }),
      disconnect: t.field({ type: PortalIndexWhereUnique }),
      create: t.field({ type: PortalIndexCreateWithoutTeleportationFailures }),
      update: t.field({ type: PortalIndexUpdateWithoutTeleportationFailures }),
    }),
  });
