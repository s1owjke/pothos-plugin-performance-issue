import { builder } from "src/builder";

import { PortalIndexCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("PortalIndexUpdateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      set: t.field({ type: [PortalIndexWhereUnique] }),
      disconnect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutTeleportationFailures] }),
    }),
  });
