import { builder } from "src/builder";

import { PortalIndexCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { PortalIndexUpdateWithoutDimensionalBackups } from "./updateWithoutDimensionalBackups";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationWithoutDimensionalBackups = builder
  .inputRef<any>("PortalIndexUpdateRelationWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PortalIndexWhereUnique }),
      disconnect: t.field({ type: PortalIndexWhereUnique }),
      create: t.field({ type: PortalIndexCreateWithoutDimensionalBackups }),
      update: t.field({ type: PortalIndexUpdateWithoutDimensionalBackups }),
    }),
  });
