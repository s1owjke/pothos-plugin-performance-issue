import { builder } from "src/builder";

import { PortalIndexCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationListWithoutDimensionalBackups = builder
  .inputRef<any>("PortalIndexCreateRelationListWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutDimensionalBackups] }),
    }),
  });
