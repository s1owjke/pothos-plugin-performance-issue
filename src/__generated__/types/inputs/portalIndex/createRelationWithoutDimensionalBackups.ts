import { builder } from "src/builder";

import { PortalIndexCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationWithoutDimensionalBackups = builder
  .inputRef<any>("PortalIndexCreateRelationWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PortalIndexWhereUnique }),
      create: t.field({ type: PortalIndexCreateWithoutDimensionalBackups }),
    }),
  });
