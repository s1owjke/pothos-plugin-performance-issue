import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationListWithoutPortalIndexes = builder
  .inputRef<any>("DimensionalBackupCreateRelationListWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutPortalIndexes] }),
    }),
  });
