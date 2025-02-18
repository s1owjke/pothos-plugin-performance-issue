import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationListWithoutPortalIndexes = builder
  .inputRef<any>("DimensionalBackupUpdateRelationListWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      set: t.field({ type: [DimensionalBackupWhereUnique] }),
      disconnect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutPortalIndexes] }),
    }),
  });
