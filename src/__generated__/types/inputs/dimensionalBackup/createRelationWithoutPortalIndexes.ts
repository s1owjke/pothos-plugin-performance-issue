import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationWithoutPortalIndexes = builder
  .inputRef<any>("DimensionalBackupCreateRelationWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DimensionalBackupWhereUnique }),
      create: t.field({ type: DimensionalBackupCreateWithoutPortalIndexes }),
    }),
  });
