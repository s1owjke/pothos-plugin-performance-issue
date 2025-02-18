import { builder } from "src/builder";

import { PortalIndexCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationListWithoutDimensionalBackups = builder
  .inputRef<any>("PortalIndexUpdateRelationListWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      set: t.field({ type: [PortalIndexWhereUnique] }),
      disconnect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutDimensionalBackups] }),
    }),
  });
