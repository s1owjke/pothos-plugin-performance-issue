import { builder } from "src/builder";

import { PortalIndexCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationWithoutTeleportationFailures = builder
  .inputRef<any>("PortalIndexCreateRelationWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PortalIndexWhereUnique }),
      create: t.field({ type: PortalIndexCreateWithoutTeleportationFailures }),
    }),
  });
