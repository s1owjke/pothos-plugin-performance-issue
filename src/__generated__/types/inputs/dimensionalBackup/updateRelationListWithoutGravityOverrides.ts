import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("DimensionalBackupUpdateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      set: t.field({ type: [DimensionalBackupWhereUnique] }),
      disconnect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutGravityOverrides] }),
    }),
  });
