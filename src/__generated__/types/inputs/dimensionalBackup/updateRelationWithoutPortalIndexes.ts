import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { DimensionalBackupUpdateWithoutPortalIndexes } from "./updateWithoutPortalIndexes";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationWithoutPortalIndexes = builder
  .inputRef<any>("DimensionalBackupUpdateRelationWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DimensionalBackupWhereUnique }),
      disconnect: t.field({ type: DimensionalBackupWhereUnique }),
      create: t.field({ type: DimensionalBackupCreateWithoutPortalIndexes }),
      update: t.field({ type: DimensionalBackupUpdateWithoutPortalIndexes }),
    }),
  });
