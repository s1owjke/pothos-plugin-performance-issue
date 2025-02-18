import { builder } from "src/builder";

import { PortalIndexCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("PortalIndexCreateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutTeleportationFailures] }),
    }),
  });
